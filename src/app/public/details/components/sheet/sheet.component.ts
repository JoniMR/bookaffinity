import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { LoginComponent } from 'src/app/public/user/pages/login/login.component';
import { ModalreviewComponent } from '../modalreview/modalreview.component';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {

  //Variable provisional hasta comprobación de logueo
  login: boolean = false;
  id: number;
  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
    this.id = history.state.id != undefined ? history.state.id : 0;
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

  openLogin() {
    this.dialog.open(LoginComponent)
  }
  openReview() {
    this.dialog.open(ModalreviewComponent)
  }
}
