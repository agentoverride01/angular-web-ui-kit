import { TestBed } from '@angular/core/testing'

import { BofaAvatarComponent } from '../../../components/src/avatar'

describe('Avatar', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BofaAvatarComponent ],
    }).compileComponents()
  })

  it('should create avatar component', () => {
    const fixture = TestBed.createComponent(BofaAvatarComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

})