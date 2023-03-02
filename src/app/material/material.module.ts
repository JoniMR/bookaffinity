import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialRoutingModule } from './material-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


const modules = [
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  FormsModule,
  ReactiveFormsModule,
  MatDividerModule,
  MatCardModule,
  MatListModule,
  MatPaginatorModule,
  MatButtonModule,
  MaterialRoutingModule,
  MatDialogModule,
]

@NgModule({
  declarations: [],
  imports: [CommonModule,
    MaterialRoutingModule,...modules],
  exports : [...modules]
})
export class MaterialModule { }
