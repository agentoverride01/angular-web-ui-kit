import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'arrayToText' })
export class ArrayToTextPipe implements PipeTransform {
  transform(value: string[], delimiter?: string) {
    return value?.join(delimiter ?? ' , ') ?? ''
  }
}

@Pipe({ name: 'textToArray' })
export class TextToArray implements PipeTransform {
  transform(value: string) {
    return value?.split(',') ?? []
  }
}