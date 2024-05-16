import type { TextViewMore, CoreEventTarget, Checkbox } from '@bofa/components/types'
import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'bofa-text-view-more',
  template: `
    <div class="block-item-text">
      <input 
        hidden
        type="checkbox"
        class="more-state"
        [id]="id"
        [checked]="expanded"
        (change)="onValueChanged($event)"
      />
      <div class="more-wrap">
        <p>
          <ng-content></ng-content>
          <ng-content selector="span[more]"></ng-content>
        </p>
      </div>
      <label *ngIf="!noDefaultToggle" [for]="id" class="closed">Read More</label>
      <label *ngIf="!noDefaultToggle" [for]="id" class="opened">Read Less</label>
    </div>
  `,
  styles: [ /* scss */ `
    :host {
      ::ng-deep * {
        color: var(--text-view-more-color);
      }

      ::ng-deep span[more], .opened {
        display: none;
      }

      ::ng-deep .more-state:checked ~ .more-wrap span[more],
      ::ng-deep .more-state:checked ~ .opened {
        display: inline;
      }
      .more-state:checked ~ .closed {
        display: none;
      }

      label {
        cursor: pointer;
      }

      .closed {
        color: var(--text-view-more-closed-color);
      }
      
      .opened {
        color: var(--text-view-more-opened-color);
      }
    }
  `]
})
export class BofaTextViewMoreComponent { 
  id: string = this.randomId()

  @Input() value!: unknown

  @Input() expanded?: boolean = false
  @Input() noDefaultToggle?: boolean = false

  @Output() onExpandChanged = new EventEmitter<TextViewMore>()

  private randomId() {
    return (Math.random() + 1).toString(36).substring(7)
  }

  onValueChanged(event: CoreEventTarget<Checkbox>) {
    this.expanded = event.target.checked
    this.onExpandChanged.next({ expanded: this.expanded })
  }
}