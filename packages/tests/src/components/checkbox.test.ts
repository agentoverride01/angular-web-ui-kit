import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Component, NgModule } from '@angular/core'
import { By } from '@angular/platform-browser'

import { BofaCheckboxGroupComponent, BofaCheckboxComponent, BofaCheckboxModule } from '@bofa/components/checkbox'

describe('Checkbox', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BofaCheckboxModule ],
    }).compileComponents()
  })

  describe('bofa-checkbox-group', () => {
    let fixture!: ComponentFixture<BofaCheckboxGroupComponent>

    beforeEach(() => {
      fixture = TestBed.createComponent(BofaCheckboxGroupComponent)
    })

    it('should create checkbox-group instance', () => {
      expect(fixture).toBeTruthy()
    })
  
    it('should have property', () => {
      const selected = fixture.componentInstance.selected
      
      expect(selected).toBeDefined()
      expect(Array.isArray(selected)).toStrictEqual(true)
      expect(selected.length).toStrictEqual(0)
    })
  })

  describe('bofa-checkbox', () => {
    let fixture!: ComponentFixture<BofaCheckboxComponent>

    beforeEach(() => {
      fixture = TestBed.createComponent(BofaCheckboxComponent)
    })

    it('should create checkbox instance', () => {
      expect(fixture).toBeTruthy()
    })
  
    it('should have property', () => {
      const { checked, disabled, value, noRipple } = fixture.componentInstance
      
      expect(checked).toBeDefined()
      expect(disabled).toBeDefined()
      expect(noRipple).toBeDefined()
      expect(value).toBeUndefined()
  
      expect(checked).toStrictEqual(false)
      expect(disabled).toStrictEqual(false)
      expect(noRipple).toStrictEqual(false)
    })
  })

  it('should have default properties (bofa-checkbox-group & bofa-checkbox)', async () => {
    @Component({
      template: `
        <bofa-checkbox-group>
          <bofa-checkbox>Apple</bofa-checkbox>
          <bofa-checkbox>Orange</bofa-checkbox>
        </bofa-checkbox-group>
      `
    })
    class TestComponent { }

    @NgModule({
      declarations: [ TestComponent ],
      imports: [ BofaCheckboxModule ]
    })
    class TestModule { }

    TestBed.resetTestingModule()

    await TestBed.configureTestingModule({
      imports: [ TestModule ]
    }).compileComponents()

    const fixture = TestBed.createComponent(TestComponent)
    fixture.detectChanges()

    const group = fixture.debugElement.query(By.css('bofa-checkbox-group')).componentInstance
    const { selected, checkboxes } = group as BofaCheckboxGroupComponent

    expect(selected).toBeDefined()
    expect(Array.isArray(selected)).toBe(true)
    expect(selected.length).toStrictEqual(0)
    expect(checkboxes.length).toStrictEqual(2)

    checkboxes.forEach(({ checked, disabled, noRipple, value }) => {
      expect(checked).toBeDefined()
      expect(checked).toStrictEqual(false)
      expect(disabled).toBeDefined()
      expect(disabled).toStrictEqual(false)
      expect(noRipple).toBeDefined()
      expect(noRipple).toStrictEqual(false)
      expect(value).toBeUndefined()
    })
  })

  it('should initialize the property value (bofa-checkbox-group & bofa-checkbox)', async () => {
    @Component({
      template: `
        <bofa-checkbox-group [selected]="selected">
          <bofa-checkbox value="1">Apple</bofa-checkbox>
          <bofa-checkbox value="2">Orange</bofa-checkbox>
          <bofa-checkbox value="3" checked>Grapes</bofa-checkbox>
        </bofa-checkbox-group>
      `
    })
    class TestComponent { 
      selected =  [1]
    }

    @NgModule({
      declarations: [ TestComponent ],
      imports: [ BofaCheckboxModule ]
    })
    class TestModule { }

    TestBed.resetTestingModule()

    await TestBed.configureTestingModule({
      imports: [ TestModule ]
    }).compileComponents()

    const fixture = TestBed.createComponent(TestComponent)
    fixture.detectChanges()

    const group = fixture.debugElement.query(By.css('bofa-checkbox-group')).componentInstance
    const { selected, checkboxes } = group as BofaCheckboxGroupComponent

    expect(selected.length).toStrictEqual(2)
  })
})