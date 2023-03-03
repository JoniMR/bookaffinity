//TODO
//Importar NgxCurrencyModule para validar input precio
//npm install ngx-currency --save
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCopyRoutingModule } from './add-copy-routing.module';
import { AddCopyComponent } from './pages/add-copy/add-copy.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
  declarations: [  
    AddCopyComponent
  ],
  imports: [
    CommonModule,
    AddCopyRoutingModule,
    MaterialModule,
    NgxCurrencyModule
  ],
  exports: [
    AddCopyComponent
  ]
})
export class AddCopyModule { }
