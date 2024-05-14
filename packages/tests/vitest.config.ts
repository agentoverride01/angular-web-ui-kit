/// <reference types="vitest" />

import { defineConfig, loadEnv } from 'vite'
import { join } from 'node:path'

import angular from '@analogjs/vite-plugin-angular'

import { getParentDir, getRootDir, hasEnvFile, hasRelativePath, vitestAlias } from '../tools/src/utils'

export default defineConfig(({ mode }) => {
  const parentDir = getParentDir('packages/tests')
  process.env = Object.assign({},
    process.env,
    hasEnvFile(mode) ? loadEnv(mode, process.cwd()): {})
  return {
    resolve: {
      mainFields: ['module'],
      alias: vitestAlias(getParentDir('packages/tests'))
    },
    plugins: [
      angular({
        tsconfig: join(__dirname, 'tsconfig.spec.json'),
        inlineStylesExtension: 'scss'
      })
    ],            
    test: {
      globals: true,      
      setupFiles: [ join(__dirname, './src/test-setup.ts') ],
      include: [ 
        join(
          hasRelativePath() ? join(getRootDir(), 'packages/tests'): getRootDir(), 
          '**/*.{test,spec}.{js,ts,jsx,tsx}'
        )
      ],
      reporters: [ 'basic' ],
      coverage: {
        provider: 'v8',
        allowExternal: true,
        cleanOnRerun: true,
        reporter: [ 'lcov', 'html', 'text' ],
        exclude: [
          join(parentDir, 'packages/components/src/types/**/*'),
          join(parentDir, 'packages/tests/src/**/*'),
          join(parentDir, 'packages/tests/coverage/**/*')
        ]
      },
      environment: 'happy-dom',
      disableConsoleIntercept: true      
    }
  }
})
