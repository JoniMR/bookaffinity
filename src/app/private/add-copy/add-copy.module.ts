import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCopyRoutingModule } from './add-copy-routing.module';
import { AddCopyComponent } from './pages/add-copy/add-copy.component';


@NgModule({
  declarations: [
  
    AddCopyComponent
  ],
  imports: [
    CommonModule,
    AddCopyRoutingModule
  ],
  exports: [
    AddCopyComponent
  ]
})
export class AddCopyModule { }
