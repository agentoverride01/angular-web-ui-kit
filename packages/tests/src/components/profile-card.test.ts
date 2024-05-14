import type { ProfileCardValue } from '@bofa/components/types'

import { TestBed } from '@angular/core/testing'
import { Component, NgModule } from '@angular/core'
import { By } from '@angular/platform-browser'

import { BofaProfileCardComponent, BofaProfileCardModule } from '@bofa/components/profile-card'

describe('ProfileCard', () => {

  beforeAll(async () => {
    await TestBed.configureTestingModule({
      imports: [ BofaProfileCardModule ],
    }).compileComponents()
  })

  it('should create profile-card component', () => {
    const fixture = TestBed.createComponent(BofaProfileCardComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })


  it('should bind the input value', async () => {
    const value: ProfileCardValue = {
      photo: {
        src: 'https://2019.ng-my.org/assets/imgs/speakers/arjay-elbore.webp'
      },
      name: 'Jane Doe',
      title: 'Software Engineer',
      email: 'jane.doe@bofa.com',
      contacts: { office: '12312', mobile: '+6598142033' }
    }

    @Component({
      template: `<bofa-profile-card [value]="value"></bofa-profile-card>`,
    })
    class TestComponent {
      value = value
    }

    @NgModule({
      declarations: [ TestComponent ],
      imports: [ BofaProfileCardModule ]
    })
    class TestModule { }

    TestBed.resetTestingModule()

    await TestBed.configureTestingModule({
      imports: [ TestModule ]
    }).compileComponents()

    const fixture = TestBed.createComponent(TestComponent)
    fixture.detectChanges()

    const getTextContent = (selector: string) => {
      return fixture.debugElement
        .query(By.css(selector))
        .nativeElement
        .textContent
    }

    expect(getTextContent('label[for=name]')).toStrictEqual(value.name)
    expect(getTextContent('label[for=title]')).toStrictEqual(value.title)
    expect(getTextContent('label[for=email]')).toStrictEqual(value.email)
  })

})