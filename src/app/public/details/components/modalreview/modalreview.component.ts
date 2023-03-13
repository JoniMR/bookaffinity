import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
