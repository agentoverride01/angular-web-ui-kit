import type { StoryObj } from '@storybook/angular'
import type { StoryThemeObj } from '@bofa/storybook/utils'

import { defineDefaultArgs } from '@bofa/storybook/utils'

import { BofaCardComponent } from '@bofa/components/card'

type Story = StoryObj<StoryThemeObj & BofaCardComponent>

export default {
  title: 'Components/Card',
  component: BofaCardComponent,
  ...defineDefaultArgs({
    render: (args) => ({
      props: args,
      styles: [ /* scss */ `
        bofa-card {
          --card-width: 50%;
        }
      `]
    })
  })
}

export const Card: Story = {
  args: {}
}