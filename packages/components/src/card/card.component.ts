import { Component } from '@angular/core'

@Component({
  selector: 'bofa-card',
  template: `
    <section class="card__container">
      <ng-content></ng-content>
    </section>
  `,
  styles: [ /* scss */`
    :host {      
      section {
        display: var(--card-display, grid);
        grid-template-columns: var(--card-grid-columns, auto);
        grid-template-rows: var(--card-grid-rows, auto 1fr auto);
        min-height: var(--card-min-height, 50vh);    
        height: var(--card-height, auto);    
        width: var(--card-width, 100%);
        border: var(--card-border, 1px solid var(--card-border-color, #A8A8A8));
        border-radius: var(--card-border-radius, 10px);
      }

      section ::ng-deep {
        > bofa-header, > bofa-content, > bofa-footer {
          grid-column: 1 / span 2;
        }
      }
    }
  `]
})
export class BofaCardComponent { }