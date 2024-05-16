import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TextViewMoreComponent } from './text-vew-more.component'
import { ArrayToTextPipe, TextToArray } from './text-view-more.pipe'
import { BofaTextViewMoreModule } from '@bofa/components/text-view-more'


const pipes = [ TextToArray,  ArrayToTextPipe ]
const declarations = [ TextViewMoreComponent, ...pipes ]

@NgModule({ declarations, exports: declarations, imports: [ CommonModule, BofaTextViewMoreModule ] })
export class TextViewMoreModule { }