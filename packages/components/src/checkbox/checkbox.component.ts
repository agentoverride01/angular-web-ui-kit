import type { Checkbox, CoreEventTarget } from '@bofa/components/types'

import { Component, EventEmitter, Input, booleanAttribute } from '@angular/core'

@Component({
  selector: 'bofa-checkbox',
  template: `
    <label class="bofa-checkbox">
      <input 
        aria-label="toggle"
        type="checkbox" 
        [checked]="checked"         
        [value]="value"
        [disabled]="disabled"
        (change)="onValueChanged($event)">
      <span>        
        <ng-content></ng-content>
      </span>
    </label>
  `,
  styleUrls: [ './checkbox.component.scss' ]
})
export class BofaCheckboxComponent {

  @Input({ transform: booleanAttribute }) checked: boolean = false
  @Input({ transform: booleanAttribute }) disabled: boolean = false
  @Input({ transform: booleanAttribute, alias: 'no-ripple' }) noRipple: boolean = false
  @Input() value!: unknown

  changed = new EventEmitter<Checkbox>()

  protected onValueChanged(event: Event) {
    const { target } = event as CoreEventTarget<Checkbox>
    this.changed.emit(target)
  }

}