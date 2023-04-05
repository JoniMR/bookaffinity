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
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  //Variable provisional hasta comprobación de logueo
  login: boolean = false;
  user: string | null = sessionStorage.getItem('user');

  constructor(public dialog: MatDialog, public router: Router) {}

  ngOnInit(): void {}
  openAccountModal() {
    this.dialog.open(AccountComponent);
  }
  openLogin() {
    this.dialog
      .open(LoginComponent)
      .afterClosed()
      .subscribe((res) => {
        if ( res===true && this.user != null) {
          this.login = true;
        }
        console.log("lol");
      })
  }
  openRegister() {
    this.dialog.open(RegisterComponent);
  }
  openReview() {
    this.dialog.open(ModalreviewComponent);
  }
  openStock() {
    this.dialog.open(ModalstockComponent);
  }
  navigateToAddProduct() {
      this.router.navigate(['/add']);
  }
  logout() {
    sessionStorage.removeItem("user");
    this.login = false;
    this.router.navigate(['']);
  }
}
