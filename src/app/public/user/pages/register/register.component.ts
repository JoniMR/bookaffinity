import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Form, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  email : FormControl;
  password : FormControl;
  name : FormControl;
  errorMsg : string;
  hide = true;


  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<RegisterComponent>,  private registerService : RegisterService) { 
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
    this.name = new FormControl('', [Validators.required]);
  }

  register(){
    console.log(this.name.value + ", " + this.email.value + ', ' + this.password.value);
    this.registerService
      .addUser(this.name.value, this.email.value, this.password.value)
      .subscribe(
        (data) => {
            console.log("Usuario creado: " + data)
            this.dialogRef.close();
        },
        (err) => {
          this.handleError(err);
        }
      );
  }

  handleError(error: any) {
    if (error.status === 500) {
      //  Show error message
      this.errorMsg = "El registro ha fallado"
    }
  }

  ngOnInit(): void {
  }
  getErrorEmail() {
    if (this.email.hasError('required')) {
      return 'Introduzca su email';
    }

    return this.email.hasError('email') ? 'No es válido el email' : '';
  }
  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Introduzca su nombre';
    }

    return this.email.hasError('name') ? 'No es válido el nombre' : '';
  }
  getErrorMessagePas() {
    if (this.password.hasError('required')) {
      return 'Debes introducir la contraseña';
    }

    return this.password.hasError('password') ? 'La contraseña no es válida' : '';
  }
  openLogin() {
    this.dialog.open(LoginComponent)
    this.dialogRef.close()
  }
}
