import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountService } from '../../services/account.service';
import { UserInterface } from '../../../public/user/models/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user: UserInterface

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private accountService : AccountService) {}

    name:string = "Michael";
    imageProfile:string ="https://picsum.photos/300/300";
    userName:string = "Michael123";
    bio:string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and";
    location:string = "Málaga, Spain";

    ngOnInit(): void{

      console.log(this.data.id) 
        this.accountService
        .getUserById(this.data.id)
        .subscribe(
          (data) => {
            console.log("HELLO -> getUserById")
              console.log(data);
              this.user = data;
              //console.log(this.book.author.name_author)
          },
          (err) => {
            this.handleError(err);
        }
      );
    }

    handleError(error: any) {
      if (error.status === 500) {
        console.error(error)
      }
    }

}