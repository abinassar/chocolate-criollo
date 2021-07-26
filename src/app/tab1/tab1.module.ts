import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CutLetterPipe } from '../shared/pipes/cut-letter.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    ReactiveFormsModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    FlexLayoutModule
  ],
  declarations: [Tab1Page,CutLetterPipe]
})
export class Tab1PageModule {}
