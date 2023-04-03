import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { LoginComponent } from 'src/app/public/user/pages/login/login.component';
import { AccountComponent } from 'src/app/shared/components/account/account.component';
import { ModalreviewComponent } from '../modalreview/modalreview.component';
import { ModalstockComponent } from '../modalstock/modalstock.component';
import { DetailService } from '../../services/detail.service';
import { BookInterface } from '../../models/book.model';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {

  //Variable provisional hasta comprobación de logueo
  login: boolean = false;
  id: number;
  score : number = 4.2;
  book : BookInterface
  constructor(public dialog: MatDialog, public router: Router, private detailService : DetailService) { }

  ngOnInit(): void {
    this.id = history.state.id != undefined ? history.state.id : 0;
    console.log(`Id: ${this.id}`)
    
    this.detailService
    .getBookById(this.id)
    .subscribe(
      (data) => {
        console.log(data);
          this.book = data;
      },
      (err) => {
        this.handleError(err);
      }
    );
  }

  handleError(error: any) {
    if (error.status === 500) {
      //  Show error message
    }
  }
  navigateToAddProduct(){
    if (!this.login) {
      this.router.navigate(['/add']);
    } else {
      this.openLogin();
    }
  }
  navigateToAddReview(){
    if (!this.login) {
      this.openReview();
    } else {
      this.openLogin();
    }
  }  

  navigateToEcommerce(){
    if (this.id != 0) {
      this.router.navigate(["sold-by"])
      .then(nav => {
        console.log(nav); 
      }, err => {
        console.log(err) 
      });
    }
  }

  navigateToMessages(){
    if (this.id != 0) {
      this.router.navigate(["messages"])
      .then(nav => {
        console.log(nav); 
      }, err => {
        console.log(err) 
      });
    }
  }
  navigateToDetailModal(){
    if (this.id != 0) {
      this.dialog.open(ModalstockComponent, {data: {id : this.id}});
      console.log(`Details Product Moda: ${this.id}`)
    }
  }

  openAccountModal() {
    this.dialog.open(AccountComponent);
  }

  openLogin() {
    this.dialog.open(LoginComponent)
  }
  openReview() {
    this.dialog.open(ModalreviewComponent)
  }
}
