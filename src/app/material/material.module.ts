import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialRoutingModule } from './material-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialRoutingModule
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
    MaterialRoutingModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports:[
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
