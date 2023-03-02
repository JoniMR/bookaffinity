import { ModalreviewComponent } from './../../../public/details/components/modalreview/modalreview.component';
import { LoginComponent } from './../../../public/user/pages/login/login.component';
import { RegisterComponent } from 'src/app/public/user/pages/register/register.component';
import { AccountComponent } from './../account/account.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }
  openDialog() {
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
}
