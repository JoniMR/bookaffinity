import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './pages/details/details.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SheetComponent } from './components/sheet/sheet.component';
import { ReviewComponent } from './components/review/review.component';
import { ModalreviewComponent } from './components/modalreview/modalreview.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ModalstockComponent } from './components/modalstock/modalstock.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DetailsComponent,
    CarouselComponent,
    SheetComponent,
    ReviewComponent,
    ModalreviewComponent,
    ModalstockComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MaterialModule,
    SharedModule
  ],
  exports: [ModalreviewComponent, DetailsComponent]
})
export class DetailsModule { }
