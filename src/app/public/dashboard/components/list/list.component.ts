import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { list } from '../../data/data';
import { List } from '../../models/list';
import { Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  list: List[] = list;
  page_size: number = 5;
  page_number: number = 1;

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
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

  navigateTo(idProduct : string){
    this.router.navigate(['/details'], { state: { id: idProduct } });
  }

}
