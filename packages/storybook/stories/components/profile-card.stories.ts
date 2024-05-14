import type { StoryObj } from '@storybook/angular'
import type { StoryThemeObj } from '@bofa/storybook/utils'
import type { ProfileCardValue } from '@bofa/components/types'

import { argsToTemplate, moduleMetadata } from "@storybook/angular"

import { defineDefaultArgs } from '@bofa/storybook/utils'

import { BofaProfileCardComponent, BofaProfileCardModule } from '@bofa/components/profile-card'
import { BofaCheckboxModule } from '@bofa/components/checkbox'

export default {
  title: 'Components/ProfileCard',
  component: BofaProfileCardComponent,
  decorators: [
    moduleMetadata({
      imports: [ BofaProfileCardModule, BofaCheckboxModule ]
    })
  ],
  ...defineDefaultArgs({
    render(args: ProfileCardValue) {
      const props = { value: args }
      return { 
        props, 
        template: /* html */` 
          <bofa-checkbox-group [selected]="[1]">
            <bofa-profile-card ${argsToTemplate(props)}>
              <bofa-checkbox value="1" role="checkbox"></bofa-checkbox>
            </bofa-profile-card>
            <bofa-profile-card ${argsToTemplate(props)}>
              <bofa-checkbox value="2" role="checkbox" checked></bofa-checkbox>
            </bofa-profile-card>
            <bofa-profile-card ${argsToTemplate(props)}>
              <bofa-checkbox value="3" role="checkbox"></bofa-checkbox>
            </bofa-profile-card>
          </bofa-checkbox-group>
        `,
        styles: [ /* scss */`
          bofa-profile-card {
            --profile-card-width: 100%;
          }

          bofa-checkbox-group {
            --checkbox-group-width: 50%
          }

          ::ng-deep .profile-card bofa-content {
            //--content-section-column-gap: 10px !important;
          }
        `]
      }
    }
  }),
  parameters: {
    actions: { disable: true }
  }
}

export const ProfileCard: StoryObj<StoryThemeObj & ProfileCardValue> = {
  args: {
    id: 'zkzujo6',
    photo: {
      src:  'https://2019.ng-my.org/assets/imgs/speakers/arjay-elbore.webp',
      alt: ''
    },
    name: 'Arjay Elbore',
    title: 'Software Engineer',
    email: 'arjay.elbore@bofa.com',
    contacts: {
      office: '12312',
      mobile: '+6598142033'
    }
  }
}