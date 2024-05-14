import analog from '@analogjs/platform';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { viteAlias } from './utils';

export default defineConfig(({ mode }) => {
  return {
    publicDir: 'src/assets',
    resolve: {
      mainFields: [ 'module' ],
      alias: viteAlias()
    },
    plugins: [ 
      analog({ 
        ssr: false, 
        static: true,
        vite: {
          tsconfig: resolve('./src/tsconfig.app.json'),
          inlineStylesExtension: 'scss'
        }
      }) 
    ]
  }
});