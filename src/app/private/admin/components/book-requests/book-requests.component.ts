import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-requests',
  templateUrl: './book-requests.component.html',
  styleUrls: ['./book-requests.component.scss']
})
export class BookRequestsComponent implements OnInit {
  BookTittle:string = "El quijote de la mancha";
  Theme:string = "Aventura";
  Theme2:string = "Fantasía";
  Theme3:string = "Clásico";
  imageProfile:string ="https://picsum.photos/200/300";

  constructor() { }

  ngOnInit(): void {
  }

}
