import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  constructor() {}
    name:string = "Michael";
    imageProfile:string ="https://picsum.photos/300/300";
    userName:string = "Michael123";
    bio:string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and";
    location:string = "Málaga, Spain";

    ngOnInit(): void{
      //getUSerById(){

      //}
    }

}