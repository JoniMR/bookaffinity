import { AddCopyModule } from './add-copy/add-copy.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    AddCopyModule
  ],
  exports: [
    AddCopyModule
  ]
})
export class PrivateModule { }
