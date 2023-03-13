import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  currentPage: number = 0;
  itemIndex: number = 0;

  photos: string[] = [
    'https://media.karousell.com/media/photos/products/2015/10/11/a_project_guide_to_ux_design_for_user_experience_designers_guide_book_1444559799_5757a608.jpg',
    'https://images.squarespace-cdn.com/content/v1/5e0129c5956b7a5624566864/1601792163210-8D766XYHP41B2VRYZFYV/pro-angular-9.png?format=1000w',
    'https://cdn.shopify.com/s/files/1/0330/7333/products/PXL_20221219_153213154_608x760.jpg?v=1671811225',
    'https://media.karousell.com/media/photos/products/2015/10/11/a_project_guide_to_ux_design_for_user_experience_designers_guide_book_1444559799_5757a608.jpg',
    'https://images.squarespace-cdn.com/content/v1/5e0129c5956b7a5624566864/1601792163210-8D766XYHP41B2VRYZFYV/pro-angular-9.png?format=1000w',
    'https://cdn.shopify.com/s/files/1/0330/7333/products/PXL_20221219_153213154_608x760.jpg?v=1671811225',
    'https://media.karousell.com/media/photos/products/2015/10/11/a_project_guide_to_ux_design_for_user_experience_designers_guide_book_1444559799_5757a608.jpg',
    'https://images.squarespace-cdn.com/content/v1/5e0129c5956b7a5624566864/1601792163210-8D766XYHP41B2VRYZFYV/pro-angular-9.png?format=1000w',
    'https://cdn.shopify.com/s/files/1/0330/7333/products/PXL_20221219_153213154_608x760.jpg?v=1671811225',
    'https://media.karousell.com/media/photos/products/2015/10/11/a_project_guide_to_ux_design_for_user_experience_designers_guide_book_1444559799_5757a608.jpg',
    'https://images.squarespace-cdn.com/content/v1/5e0129c5956b7a5624566864/1601792163210-8D766XYHP41B2VRYZFYV/pro-angular-9.png?format=1000w',
    'https://cdn.shopify.com/s/files/1/0330/7333/products/PXL_20221219_153213154_608x760.jpg?v=1671811225',
  ];

  indexIncrease(): void {}

  nextPage(): void {
    if (this.photos[(this.currentPage+1) * 5]) {
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

  constructor() {}

  ngOnInit(): void {
    this.fillRow();
  }
}
