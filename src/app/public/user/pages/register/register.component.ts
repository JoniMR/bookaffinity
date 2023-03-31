import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit(): void {
  }
  openLogin() {
    this.dialog.open(LoginComponent)
    this.dialogRef.close()
  }
}
