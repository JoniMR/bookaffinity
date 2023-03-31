import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountComponent } from './components/account/account.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ImgUploadComponent } from './components/img-upload/img-upload.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AccountComponent,
    ImgUploadComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    BrowserModule,
    HttpClientModule,
    NgxDropzoneModule
  ],
  exports: [
    AccountComponent,
    NavbarComponent,
    FooterComponent,
    ImgUploadComponent
  ]
})
export class SharedModule { }
