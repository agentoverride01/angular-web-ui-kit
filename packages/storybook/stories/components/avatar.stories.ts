import type { StoryObj } from '@storybook/angular'
import type { StoryThemeObj } from '@bofa/storybook/utils'

import { defineDefaultArgs } from '@bofa/storybook/utils'

import { BofaAvatarComponent } from '@bofa/components/avatar'

type Story = StoryObj<StoryThemeObj & BofaAvatarComponent>

export default {
  title: 'Components/Avatar',
  component: BofaAvatarComponent,
  ...defineDefaultArgs()
}

export const Avatar: Story = {
  args: {
    src: 'https://2019.ng-my.org/assets/imgs/speakers/arjay-elbore.webp',
    alt: ''
  }
}