import { defineConfig, ViteDevServer } from 'vite'
import { join } from 'node:path'

import angular from '@analogjs/vite-plugin-angular'

import { getParentDir, viteAlias } from '../tools/src/tools'

export default defineConfig(({ mode }) => {
  return {
    publicDir: 'src/assets',
    build: {
      target: ['es2020']
    },
    resolve: {
      mainFields: ['module'],
      alias: viteAlias(getParentDir('packages/storybook'))
    },
    plugins: [
      {
        name: 'watcher',
        configureServer({ watcher, hot }: ViteDevServer) {
          watcher.on('change', (path: string) => {
            hot.send({ type: 'full-reload', path })
          })
        }
      },
      angular({ 
        jit: true, 
        tsconfig: join(process.cwd(), 'tsconfig.json'),
        inlineStylesExtension: 'scss'
      }),
      {
        name: '@storybook/angular',
        transform(code) {
          if (code.includes('"@storybook/angular"')) {
            return code.replace(/\"@storybook\/angular\"/g, '\"@storybook/angular/dist/client\"');
          }
          return;
        }
      }
    ],
    define: {
      'import.meta.vitest': mode !== 'production',
      'process.env.FORCE_SIMILAR_INSTEAD_OF_MAP': 'false'
    }
  }
});
