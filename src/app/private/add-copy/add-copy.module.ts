import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCopyRoutingModule } from './add-copy-routing.module';
import { AddCopyComponent } from './pages/add-copy/add-copy.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [  
    AddCopyComponent
  ],
  imports: [
    CommonModule,
    AddCopyRoutingModule,
    MaterialModule
  ],
  exports: [
    AddCopyComponent
  ]
})
export class AddCopyModule { }
