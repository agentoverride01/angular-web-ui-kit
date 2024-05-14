import { TestBed } from '@angular/core/testing'

import { BofaContentComponent } from '@bofa/components/content'

describe('Content', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BofaContentComponent ],
    }).compileComponents()
  })

  it('should create content component', () => {
    const fixture = TestBed.createComponent(BofaContentComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

})