import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookInterface } from '../../models/book.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id : string;
  book : BookInterface

  constructor(private router: Router) { }

  ngOnInit(): void {
    //TO-DO
    //Añadir SessionStorage para guardar id para navegación
    this.id = history.state.id != undefined ? history.state.id : 0;
    console.log(this.id)
    if (this.id == '0') {
      this.router.navigate([""])
      .then(nav => {
        console.log(nav); 
      }, err => {
        console.log(err) 
      });
    }
  }

}
