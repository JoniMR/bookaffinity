import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './pages/details/details.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SheetComponent } from './components/sheet/sheet.component';
import { ReviewComponent } from './components/review/review.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    DetailsComponent,
    CarouselComponent,
    SheetComponent,
    ReviewComponent,

  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MaterialModule
  ],
  exports:[
    SheetComponent,
    CarouselComponent
  ]
})
export class DetailsModule { }
