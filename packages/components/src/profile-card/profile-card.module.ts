import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BofaAvatarModule } from '@bofa/components/avatar'
import { BofaCardModule } from '@bofa/components/card'
import { BofaContentModule } from '@bofa/components/content'

import { BofaProfileCardComponent } from './profile-card.component'

@NgModule({
  declarations: [ BofaProfileCardComponent ],
  imports: [ BofaAvatarModule, BofaCardModule, BofaContentModule, CommonModule ],
  exports: [ BofaProfileCardComponent ]
})
export class BofaProfileCardModule { }