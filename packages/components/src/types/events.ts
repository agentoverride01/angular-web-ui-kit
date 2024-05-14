export type CoreEventTarget<T> = {
  target: (EventTarget | null) & T
  currentTarget: (EventTarget | null) & T
} 