import type { StoryObj } from '@storybook/angular'

import { moduleMetadata } from "@storybook/angular"
import { defineDefaultArgs } from '@bofa/storybook/utils'

import { BofaCheckboxComponent, BofaCheckboxModule } from '@bofa/components/checkbox'

export default {
  title: 'Components/Checkbox',
  component: BofaCheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [ BofaCheckboxModule ]
    })
  ],
  ...defineDefaultArgs({
    render: (args) => ({
      template: /* html */`
        <bofa-checkbox-group [selected]="[2]">
          <bofa-checkbox value="1">Orange</bofa-checkbox>
          <bofa-checkbox value="2" checked>Apple</bofa-checkbox>
          <bofa-checkbox value="3">Grapes</bofa-checkbox>
        </bofa-checkbox-group>
      `,
    })
  })
}

export const Default: StoryObj<BofaCheckboxComponent> = {
  args: {}
}