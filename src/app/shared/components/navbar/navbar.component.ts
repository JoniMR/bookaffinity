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
}
