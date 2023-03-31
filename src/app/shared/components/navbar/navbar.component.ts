import { ModalreviewComponent } from './../../../public/details/components/modalreview/modalreview.component';
import { LoginComponent } from './../../../public/user/pages/login/login.component';
import { RegisterComponent } from 'src/app/public/user/pages/register/register.component';
import { AccountComponent } from './../account/account.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalstockComponent } from 'src/app/public/details/components/modalstock/modalstock.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
   //Variable provisional hasta comprobación de logueo
  login: boolean

  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
    
  }
  openAccountModal() {
    this.dialog.open(AccountComponent);
  }
  openLogin() {
    this.dialog.open(LoginComponent)
  }
  openRegister() {
    this.dialog.open(RegisterComponent)
  }
  openReview() {
    this.dialog.open(ModalreviewComponent)
  }
  openStock() {
    this.dialog.open(ModalstockComponent)
  }
  navigateToAddProduct(){
    if (!this.login) {
      this.router.navigate(['/add']);
    } else {
      this.openLogin();
    }
  }
}
