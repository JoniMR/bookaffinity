import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-copy',
  templateUrl: './add-copy.component.html',
  styleUrls: ['./add-copy.component.scss']
})
export class AddCopyComponent implements OnInit {
  
  addCopyForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addCopyForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      condition: new FormControl('', [Validators.required]),
      photos: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
      });
  }

  public formError = (controlName: string, errorName: string) =>{
    return this.addCopyForm.controls[controlName].hasError(errorName);
    }

  onSubmit(): void {
    // display some fireworks
  }

}
