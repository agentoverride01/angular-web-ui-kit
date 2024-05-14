import { existsSync, readdirSync } from 'node:fs'
import { join, basename, relative, posix } from 'node:path'

import { getTsconfig } from 'get-tsconfig'
import { Alias } from 'vite'

const getTsConfigPath = (rootDir?: string) => {
  return join(rootDir ?? getRootDir(), 'tsconfig.json')
}

const getCompilerOptions = (rootDir?: string) => {
  const tsconfig = getTsconfig(getTsConfigPath(rootDir))
  return tsconfig?.config?.compilerOptions?.paths ?? null
}

const getTsPaths = (rootDir?: string) => {
  return existsSync(getTsConfigPath(rootDir)) ? getCompilerOptions(rootDir): null
}

export const getRootDir = () => {
  const { INIT_CWD, VITE_ROOT_DIR } = process.env
  return INIT_CWD ?? VITE_ROOT_DIR ?? process.cwd()
}

export const hasRelativePath = () => {
  return relative(getRootDir(), process.cwd())
}

export const getParentDir = (...workspace: string[]) => {
  const rootDir = getRootDir()
  return hasRelativePath() 
    ? rootDir
    : rootDir.replace(posix.join(...workspace), '')
}

export const getFallbackRootDir = () => {
  return process.env['VITE_ROOT_DIR'] as string
}

export const hasEnvFile = (mode: string) => {
  return existsSync('.env') || existsSync(`.env.${mode}`)
}

export const viteTsPaths = (rootDir?: string) => {
  const paths = getTsPaths(rootDir) as Record<string, string[]>
  return Object.keys(paths ?? {}).reduce((p, c) => {
    const value = paths[c].at(0)
    if (value) p[c] = join(rootDir ?? getRootDir(), value) as string
    return p
  }, {} as Record<string, string>)
}

export const getComponentPaths = (rootDir?: string) => {
  const ROOT_DIR = rootDir ?? getRootDir()
  const BASE_PATH = join(ROOT_DIR, 'packages/components/src')
  const folders = readdirSync(BASE_PATH)
  return folders.reduce((p, c) => {
    const indexPath = join(BASE_PATH, c, 'index.ts')
    if (existsSync(indexPath)) {
      const importPath = '@bofa/components/' + basename(c) 
      p[importPath] = indexPath
    }
    return p
  }, {} as Record<string, string>)
}

export const viteAlias = (rootDir?: string) => {
  const ROOT_DIR = rootDir ?? getRootDir()
  return Object.assign({}, viteTsPaths(ROOT_DIR),  getComponentPaths(ROOT_DIR))
}

export const vitestAlias = (rootDir?: string) => {
  const alias = viteAlias(rootDir)
  return Object.keys(alias).reduce((p, c) => {
    const $alias = {
      find: c.replaceAll('/*', ''),
      replacement: alias[c].replaceAll('*', '')
    } as Alias
    return [ ...p, $alias ]
  }, [] as Alias[])
}