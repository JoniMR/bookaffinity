import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { ListComponent } from './components/list/list.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    EcommerceComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    MaterialModule
  ],
  exports:[
    EcommerceComponent
  ]
})
export class EcommerceModule { }
