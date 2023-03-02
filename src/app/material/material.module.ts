import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';


const modules = [
  MatButtonModule,
  MatFormFieldModule, 
  ReactiveFormsModule, 
  MatInputModule, 
  FormsModule, 
  MatCardModule,
  MatDialogModule,MatIconModule, MatSelectModule
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports : [...modules]
})
export class MaterialModule { }
