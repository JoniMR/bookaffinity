import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-modalreview',
  templateUrl: './modalreview.component.html',
  styleUrls: ['./modalreview.component.scss']
})
export class ModalreviewComponent implements OnInit {
  picturelist:string[] = [
    'https://img2.rtve.es/i/?w=1600&i=1618740837832.jpg',
    'https://img2.rtve.es/i/?w=1600&i=1618740837832.jpg',
    'https://img2.rtve.es/i/?w=1600&i=1618740837832.jpg',
    'https://img2.rtve.es/i/?w=1600&i=1618740837832.jpg',
  ]
  constructor(public dialogRef: MatDialogRef<ReviewComponent>) { }

  ngOnInit(): void {
  }

  sendReview(){
    //TO-DO
    //Añadir funcionalidad: publicar review
    this.dialogRef.close()
    console.log("Hello")
  }
}
