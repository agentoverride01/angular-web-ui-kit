import type { StoryObj } from '@storybook/angular'
import type { StoryThemeObj } from '@bofa/storybook/utils'
import type { ProfileCardValue } from '@bofa/components/types'

import { argsToTemplate, moduleMetadata } from "@storybook/angular"

import { defineDefaultArgs } from '@bofa/storybook/utils'

import { BofaProfileCardComponent, BofaProfileCardModule } from '@bofa/components/profile-card'
import { BofaCheckboxModule } from '@bofa/components/checkbox'
import { TextViewMoreComponent, TextViewMoreValue } from './text-view-more/text-vew-more.component'
import { TextViewMoreModule } from './text-view-more/text-view-more.module'
import { BofaTextViewMoreModule } from '@bofa/components/text-view-more'

export default {
  title: 'Components/ViewMore',
  component: TextViewMoreComponent,
  decorators: [
    moduleMetadata({
      imports: [ TextViewMoreModule, TextViewMoreModule ]
    })
  ],
  ...defineDefaultArgs({
    render(args: ProfileCardValue) {
      const props = { value: args }
      return { 
        props, 
        template: /* html */` 
          <text-view-more ${argsToTemplate(props)}></text-view-more>
        `
      }
    }
  }),
  parameters: {
    actions: { disable: true }
  }
}

export const ViewMore: StoryObj<StoryThemeObj & ProfileCardValue & TextViewMoreValue> = {
  args: {
    expanded: false,
    primary: 'Apple Inc',
    companies: `Advanced Micro Devices Inc,Allegro Microsystems Inc,  Ambarella Inc,  
Analog Devices Inc, Applied Materials Inc, ASML Holding NV,  Boardcom Inc, CEVA Inc, 
Cirrus Logic Inc,  Inchor Holdings Ltd, Infineon Technologies AG, Kulicke and Sofa Industries Inc, 
Soffa Industries Inc, Lam Research Corp, Lattice Semiconductor Corp, Littelfuse Inc, 
MACOM Technology Solutions Holdings Inc, Marvell Technology Inc, Micron Technology Inc, 
MKS Inctriments Inc`.replaceAll('\n', '')
  }
}