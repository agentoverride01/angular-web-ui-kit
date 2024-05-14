import { Component, Input } from '@angular/core'

@Component({
  selector: 'bofa-avatar',
  template: `
    <section class="avatar__container">
      <img [src]="src" [alt]="alt" />
    </section>
  `,
  styles: [ /* scss */ `
    :host {
      section {
        border: 2px solid var(--avatar-border-color);
        padding: 3px;
      }

      section, 
      img {
        width: var(--avatar-width, 80px);
        height: var(--avatar-height, 80px);
        border-radius: var(--avatar-radius, 100%);
      }

      img {
        object-fit: cover;
      }
    }
  `]
})
export class BofaAvatarComponent {
  @Input() src?: string

  @Input() alt?: string
}