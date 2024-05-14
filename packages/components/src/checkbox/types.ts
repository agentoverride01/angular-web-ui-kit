
export interface Checkbox {
  checked?: boolean
  disabled?: boolean
  value?: unknown
  noRipple?: boolean
}

export type CheckBoxType = 'checkbox' | 'button'

export type SelectedChangedValue = {
  selected?: unknown[]
} & Checkbox