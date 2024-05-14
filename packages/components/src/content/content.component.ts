import { Component } from '@angular/core'

@Component({
  selector: 'bofa-content',
  template: `
    <section class="content__container">
      <ng-content></ng-content>
    </section>
  `,
  styles: [ /* scss */`
    :host {
      section {
        display: var(--content-display, grid);
        grid-template-rows: var(--content-grid-rows, auto);
        grid-template-columns: var(--content-grid-colums);
        min-height: var(--content-min-height, auto);
        padding: var(--content-padding);
      }
    
      section ::ng-deep {
        > header { 
          display: var(--content-header-display, grid);
        }

        > section {
          display: var(--content-section-display, grid);
          row-gap: var(--content-section-row-gap);
          grid-template-columns: var(--content-section-grid-columns);
          column-gap: var(--content-section-column-gap);
          align-items: var(--content-section-align-items);
        }

        > footer {
          display: var(--content-footer-display, grid);
        }
      }     
    }
  `]
})
export class BofaContentComponent { }