import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: FormControl;
  password: FormControl;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginComponent>,
    private loginService: LoginService
  ) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }

  login() {
    console.log(this.email.value + ", " + this.password.value)
    this.loginService.getUserbyEmailAndPassword(this.email.value, this.password.value).subscribe(res => {
      if(res.id_user){
        // Guardar usuario en el session storage??? y cerrar modal
      }
    })
  }

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessagePas() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';
  }
  openRegister() {
    this.dialog.open(RegisterComponent);
    this.dialogRef.close();
  }
}
