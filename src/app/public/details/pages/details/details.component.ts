import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id : string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.id = history.state.id != undefined ? history.state.id : 0;
    if (this.id == '0') {
      this.router.navigate(["/dashboard"])
    }
  }

}
