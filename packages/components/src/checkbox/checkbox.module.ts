import { NgModule } from '@angular/core'

import { BofaCheckboxGroupComponent } from './checkbox-group.component'
import { BofaCheckboxComponent } from './checkbox.component'

const declarations = [ BofaCheckboxComponent, BofaCheckboxGroupComponent ]

@NgModule({ declarations, exports: declarations })
export class BofaCheckboxModule { }