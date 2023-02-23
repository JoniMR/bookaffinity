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
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatPaginatorModule,
    
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MaterialRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatPaginatorModule,
  ]
})
export class MaterialModule { }
