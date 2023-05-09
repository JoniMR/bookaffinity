import { ModalStockService } from './../../services/modalstock.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

export interface Book {
  id: number;
}

@Component({
  selector: 'app-modalstock',
  templateUrl: './modalstock.component.html',
  styleUrls: ['./modalstock.component.scss'],
})
export class ModalstockComponent implements OnInit {
  currentPage: number = 0;
  itemIndex: number = 0;

  price: FormControl;

  photos: string[] = [
    'https://media.karousell.com/media/photos/products/2015/10/11/a_project_guide_to_ux_design_for_user_experience_designers_guide_book_1444559799_5757a608.jpg',
    'https://images.squarespace-cdn.com/content/v1/5e0129c5956b7a5624566864/1601792163210-8D766XYHP41B2VRYZFYV/pro-angular-9.png?format=1000w',
    'https://cdn.shopify.com/s/files/1/0330/7333/products/PXL_20221219_153213154_608x760.jpg?v=1671811225',
    'https://media.karousell.com/media/photos/products/2015/10/11/a_project_guide_to_ux_design_for_user_experience_designers_guide_book_1444559799_5757a608.jpg',
    'https://images.squarespace-cdn.com/content/v1/5e0129c5956b7a5624566864/1601792163210-8D766XYHP41B2VRYZFYV/pro-angular-9.png?format=1000w',
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Book,
    private modalStockService: ModalStockService
  ) {
    this.price = new FormControl('', [Validators.required]);
  }

  indexIncrease(): void {}

  nextPage(): void {
    if (this.photos[(this.currentPage + 1) * 5]) {
      this.currentPage += 1;
      this.fillRow();
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) this.currentPage -= 1;
  }

  fillRow(): void {
    for (let i = this.currentPage * 5; i < this.currentPage * 5 + 5; i++) {
      if (!this.photos[i]) {
        this.photos.push('no-photo');
      }
    }
  }

  handleError(error: any) {
    if (error.status === 500) {
      //  Show error message
    }
  }

  ngOnInit(): void {
    this.fillRow();
  }

  updateCopy() {
    this.modalStockService.updateCopy(this.price.value).subscribe(
      (data) => {
        console.log('Precio actualizado: ' + data);

        /* Falta añadir referencia de en qué componente se edita el copy.
        this.dialogRef.close(); */
      },
      (err) => {
        this.handleError(err);
      }
    );
  }
}

