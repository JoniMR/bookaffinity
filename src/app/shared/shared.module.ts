import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountComponent } from './components/account/account.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports: [
    AccountComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
