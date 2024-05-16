
import { Component, Input } from '@angular/core'

export type TextViewMoreValue = {
  primary?: string
  companies?: string
  expanded?: boolean
  limitTo?: number
}

@Component({
  selector: 'text-view-more',
  template: `
    <bofa-text-view-more [noDefaultToggle]="true" [expanded]="value?.expanded">
      <b>{{value?.primary}}</b>
      <span *ngIf="companies.length"> , </span> 
      {{limit(0, 9) | arrayToText}}
      <span *ngIf="value?.expanded">,</span>        
      <span
        class="opened"
        (click)="onToggle()"
        *ngIf="!value?.expanded && limitShowMore.length > 1" >
        +{{limitShowMore.length}}</span>
      <span more>
        {{limitShowMore | arrayToText}}
        <span class="closed" (click)="onToggle()" *ngIf="value?.expanded">Show Less</span>        
      </span>
    </bofa-text-view-more>
  `,
  styles: [ /* scss */ `
    :host {
      .opened, .closed {
        cursor: pointer;
      }

      .opened {
        border: 1px solid #fff;
        background: var(--research-report-text-view-more-opened-bg-color);
        border-radius: 3px;
        color: var(--research-report-text-view-more-opened-color);
      }

      .closed {
        color: var(--research-report-text-view-more-closed-color);
      }
    }
  `]
})
export class TextViewMoreComponent {
  
  @Input() value!: TextViewMoreValue

  get companies() {
    return this.value?.companies?.split(',') ?? []
  }

  get limitShowMore() {
    return this.limit(9)
  }

  limit(start: number, end?: number) {
    const companies = this.companies
    return companies.slice(start, end ?? companies.length)
  }

  onToggle() {
    this.value = { ...this.value, expanded: !this.value.expanded }
  }
}