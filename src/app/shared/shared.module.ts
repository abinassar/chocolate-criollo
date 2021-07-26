import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CutLetterPipe } from './pipes/cut-letter.pipe';



@NgModule({
  declarations: [
    CutLetterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CutLetterPipe
  ]
})
export class SharedModule { }
