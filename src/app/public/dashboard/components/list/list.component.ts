import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
// import { list } from '../../data/data';
import { BookInterface } from '../../models/book';
import { Router} from '@angular/router';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  list: BookInterface[]// = list;
  page_size: number = 5;
  page_number: number = 1;

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  constructor(private router: Router, private listService : ListService) {}

  ngOnInit(): void {
    this.listService
    .getAllBooks()
    .subscribe(
      (data) => {
        console.log(data);
          this.list = data;
          this.list.forEach(element =>{
            if (element.picture == undefined) {  
              console.log("HELLO book picture")          
              element.picture = "https://i.imgur.com/BkqNIm4.png"
            }
          })
      },
      (err) => {
        this.handleError(err);
      }
    );
    // this.list.forEach((ele) => {
    //   ele.picture = "SDFDSdfsdfd";
    // });
    this.paginator._intl.itemsPerPageLabel="Libros por página:";
    this.paginator._intl.nextPageLabel = 'Siguiente';
    this.paginator._intl.previousPageLabel = 'Anterior';

    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) =>  {
      if (length === 0 || pageSize === 0) {
        return `0 / ${length}`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} de ${length}`;
    }
  }

  handleError(error: any) {
    if (error.status === 500) {
      //  Show error message
    }
  }

  navigateTo(idProduct : string){
    this.router.navigate(['/details'], { state: { id: idProduct } });
  }

}
