import { TestBed } from '@angular/core/testing'

import { BofaCardComponent } from '@bofa/components/card'

describe('Card', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BofaCardComponent ],
    }).compileComponents()
  })

  it('should create card component', () => {
    const fixture = TestBed.createComponent(BofaCardComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

})