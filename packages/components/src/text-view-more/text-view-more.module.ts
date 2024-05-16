import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BofaTextViewMoreComponent } from './text-view-more.component'

@NgModule({
  declarations: [ BofaTextViewMoreComponent ],
  exports: [ BofaTextViewMoreComponent ],
  imports: [ CommonModule ]
})
export class BofaTextViewMoreModule { }