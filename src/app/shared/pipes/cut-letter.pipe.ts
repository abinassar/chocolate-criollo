import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutLetter'
})
export class CutLetterPipe implements PipeTransform {

  cutLetter: string;
  transform(value: string): string {
    this.cutLetter = value.substring(0, 24) + "...";
    return this.cutLetter;
  }
}
