import type { Meta } from '@storybook/angular'
import type { Args } from '@storybook/types'

export type StorybookTheme = 'dark' | 'light'

export type StoryThemeObj = { 
  theme?: StorybookTheme
} 

export type ComponentMeta<T> = {
  template?: string
  styles?: string[]
}

export type Renderer<T> = (args: T) => ({ props?: Args } & ComponentMeta<T>)

export type Options<T> = {
  render?: Renderer<T>
  defaultTheme?: StorybookTheme
  metaArgs?: Meta<T>
}

export function defineDefaultArgs<T = Args>(options?: Options<T>) {
  const { defaultTheme = 'dark', render, metaArgs = {} } = options ?? {}
  return {
    render<TRender extends T & StoryThemeObj>(args: TRender) {
      document.documentElement.setAttribute('theme', args.theme ?? defaultTheme)
      return render?.(args) ?? {
        props: args
      }
    },
    argTypes: {
      theme: { 
        options: [ 'dark', 'light' ],
        control: { 
          type: 'select'
        },
        defaultValue: defaultTheme
      },
      ...metaArgs.argTypes ?? {}
    },
    args: {
      theme: defaultTheme,
      ...metaArgs.args ?? {}
    }
  } as Meta<T>
}