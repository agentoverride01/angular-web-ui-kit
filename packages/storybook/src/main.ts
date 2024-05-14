import type { StorybookConfig } from '@storybook/angular'
import { join } from 'node:path'

export default {
  stories: [ '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)' ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: join(__dirname, '../vite.config.ts')
      }
    }
  },  
  docs: {
    autodocs: 'tag'
  }
} as StorybookConfig
