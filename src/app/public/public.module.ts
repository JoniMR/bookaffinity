import { DetailsModule } from './details/details.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    DetailsModule
  ],
  exports: [
  ]
})
export class PublicModule { }
