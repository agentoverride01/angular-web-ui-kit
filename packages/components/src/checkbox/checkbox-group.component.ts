import type { SelectedChangedValue, Checkbox } from './types'

import { Component, AfterContentInit, OnDestroy, Output, EventEmitter, Input, ContentChildren, QueryList } from '@angular/core'
import { Subscription } from 'rxjs'

import { BofaCheckboxComponent } from './checkbox.component'

@Component({
  selector: 'bofa-checkbox-group',
  template: `
    <section class="bofa-checkbox-group">
      <ng-content></ng-content>
    </section>
  `,
  styles: [ /* scss */`
    :host {
      .bofa-checkbox-group {
        display: var(--checkbox-group-display, grid);
        width: var(--checkbox-group-width);
      }
    }
  `]
})
export class BofaCheckboxGroupComponent implements OnDestroy, AfterContentInit {
  #disposables = new Subscription()

  @ContentChildren(BofaCheckboxComponent, { descendants: true }) checkboxes!: QueryList<BofaCheckboxComponent>
  @Output() selectedChanged = new EventEmitter<SelectedChangedValue>()
  @Input() selected: unknown[] = []

  #selectItem(value: unknown) {
    return this.selected.findIndex(s => {
      return (typeof s == 'object'
        ? JSON.stringify(s) === JSON.stringify(value || {})
        : s?.toString() === value?.toString())
    })
  }

  #updateSelected(checkbox: Checkbox) {
    const { value, checked } = checkbox
    
    const selectIndex = this.#selectItem(value)
  
    if (checked && selectIndex === -1) {
      this.selected = [ ...this.selected, value ]
    }

    if (!checked && selectIndex !== -1) {
      const value = this.selected.at(selectIndex)
      this.selected = this.selected.filter(c => c !== value)
    }
  }

  #onCheckboxNext(checkbox: Checkbox) {
    this.#updateSelected(checkbox)
    this.selectedChanged.emit({ 
      ...checkbox, 
      selected: this.selected
    })
  }

  #updateCheckboxAfterContentInit(checkbox: Checkbox) {
    const index = this.#selectItem(checkbox.value)
    if (index !== -1) {
      checkbox.checked = true  
    }
    this.#updateSelected(checkbox)
  }

  ngAfterContentInit() {
    const next = this.#onCheckboxNext.bind(this)    
    this.checkboxes.forEach(checkbox => {
      const dispose = checkbox.changed.subscribe(next)
      this.#disposables.add(dispose)      
      checkbox.value && this.#updateCheckboxAfterContentInit(checkbox)
    })
    this.selectedChanged.emit({ selected: this.selected })
  }

  ngOnDestroy() {
    this.#disposables.unsubscribe()
  }
}