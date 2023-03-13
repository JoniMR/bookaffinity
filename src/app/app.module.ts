import { AdminModule } from './private/admin/admin.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicModule } from './public/public.module';
import { SharedModule } from './shared/shared.module';
import { PrivateModule } from './private/private.module';
import { DetailsModule } from './public/details/details.module';
import { DashboardModule } from './public/dashboard/dashboard.module';
import { EcommerceModule } from './private/ecommerce/ecommerce.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PublicModule,
    DashboardModule,
    SharedModule,
    PrivateModule,
    DetailsModule,
    EcommerceModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
