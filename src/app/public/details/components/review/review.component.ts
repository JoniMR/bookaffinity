import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/public/user/pages/login/login.component';
import { BookInterface } from '../../models/book.model';
import { ModalreviewComponent } from '../modalreview/modalreview.component';
import { ReviewService } from '../../services/review.service';
import { CommentInterface } from '../../models/comment.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {


@Input()libro:BookInterface | undefined

  photos: string[] = [
    'https://media.karousell.com/media/photos/products/2015/10/11/a_project_guide_to_ux_design_for_user_experience_designers_guide_book_1444559799_5757a608.jpg',
    'https://images.squarespace-cdn.com/content/v1/5e0129c5956b7a5624566864/1601792163210-8D766XYHP41B2VRYZFYV/pro-angular-9.png?format=1000w',
    'https://cdn.shopify.com/s/files/1/0330/7333/products/PXL_20221219_153213154_608x760.jpg?v=1671811225',
    'https://media.karousell.com/media/photos/products/2015/10/11/a_project_guide_to_ux_design_for_user_experience_designers_guide_book_1444559799_5757a608.jpg',
  ];

    //Variable provisional hasta comprobación de logueo
    login:boolean = false;
    id: number;
    reviews : CommentInterface[];

  
  constructor(public dialog: MatDialog, public router: Router, private reviewService: ReviewService) { }

  ngOnInit(): void {
    

    this.id = history.state.id != undefined ? history.state.id : 0;
    console.log(`yo que se yaaaaa Id: ${this.id}`)
    this.reviewService
    .getAllCommentByBookId(this.id)
    .subscribe(
      (data) => {
          this.reviews = data;
      },
    );
    
  }

  navigateToAddReview(){
    if (!this.login) {
      this.openReview();
    } else {
      this.openLogin();
    }
  }
  openLogin() {
    this.dialog.open(LoginComponent)
  }
  openReview() {
    // this.dialog.open(ModalreviewComponent, {data: this.Review})
  }
}
