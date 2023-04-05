import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.scss']
})
export class RequestBookComponent implements OnInit {

  clicked: boolean = false;
  requestForm: FormGroup;

  categoryList : string[] = ["Crimen", "Romance", "Ciencia"];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.requestForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      categories: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      });
  }

  public formError = (controlName: string, errorName: string) =>{
    return this.requestForm.controls[controlName].hasError(errorName);
    }

  onSubmit(): void {
    // display some fireworks
  }

  navigateToDashboard() {
    this.router.navigate(['']);
}
}
