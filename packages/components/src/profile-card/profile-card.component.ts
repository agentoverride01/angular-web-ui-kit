import type { ProfileCardValue } from './types'

import { Component, Input } from '@angular/core'

@Component({
  selector: 'bofa-profile-card',
  template: `
    <bofa-card class="profile-card">
      <bofa-content>
        <section>
          <ng-content select="[role=checkbox]"></ng-content>
          <section class="profile-card--right">
            <bofa-avatar 
              [src]="value?.photo?.src" 
              [alt]="value?.photo?.alt"></bofa-avatar>
            <section class="profile-card--info">
              <label for="name">{{value?.name}}</label>
              <label for="title">{{value?.title}}</label>
              <label for="email" >
                <a *ngIf="value?.email" href="mailto:{{value?.email}}">{{value?.email}}</a>
              </label>
              <section class="profile-card--contacts">
                <label for="office">
                  <span>OFFICE</span>
                  <span>{{value?.contacts?.office}}</span>
                </label>
                <label for="mobile">
                  <span>MOBILE</span>
                  <span>{{value?.contacts?.mobile}}</span>
                </label>
              </section>
            </section>
          </section>
        </section>
      </bofa-content>
    </bofa-card>
  `,
  styleUrls: [ './profile-card.component.scss' ]
})
export class BofaProfileCardComponent { 

  @Input() value?: ProfileCardValue

}