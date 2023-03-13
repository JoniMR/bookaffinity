import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AccountComponent } from 'src/app/shared/components/account/account.component';
import { MatDialog } from '@angular/material/dialog';
export interface UserInfo {
  userID: number;
  userName: string;
  fecha: string;
  userEmail: string;
  userRol: string;
}

const ELEMENT_DATA: UserInfo[] = [
  {
    userID: 1,
    userName: 'Antonio12',
    fecha: '01/03/2023',
    userEmail: 'prueba@babelgroup.com',
    userRol: 'Admin',
  },
  {
    userID: 2,
    userName: 'PAco13',
    fecha: '30/11/1999',
    userEmail: 'prueba@babelgroup.com',
    userRol: 'User',
  },
  {
    userID: 3,
    userName: 'Hydrogen',
    fecha: '30/11/1999',
    userEmail: 'prueba@babelgroup.com',
    userRol: 'Admin',
  },
  {
    userID: 4,
    userName: 'Ronaldo03',
    fecha: '30/11/1999',
    userEmail: 'prueba@babelgroup.com',
    userRol: 'User',
  },
  {
    userID: 5,
    userName: 'Hydrogen',
    fecha: '05/12/1999',
    userEmail: 'prueba@babelgroup.com',
    userRol: 'User',
  },
  {
    userID: 6,
    userName: 'ThomasUX',
    fecha: '30/11/1999',
    userEmail: 'prueba@babelgroup.com',
    userRol: 'Admin',
  },
  {
    userID: 7,
    userName: 'Hydrogen',
    fecha: '01/11/1999',
    userEmail: 'prueba@babelgroup.com',
    userRol: 'Admin',
  },
  {
    userID: 8,
    userName: 'Sergio',
    fecha: '30/11/1997',
    userEmail: 'prueba@babelgroup.com',
    userRol: 'User',
  },
  {
    userID: 9,
    userName: 'Hydrogen',
    fecha: '30/11/1999',
    userEmail: 'prueba@babelgroup.com',
    userRol: 'Admin',
  },
  {
    userID: 10,
    userName: 'Roberto88',
    fecha: '30/11/1989',
    userEmail: 'prueba@babelgroup.com',
    userRol: 'User',
  },
  {
    userID: 11,
    userName: 'Hydrogen',
    fecha: '30/11/2024',
    userEmail: 'prueba@babelgroup.com',
    userRol: 'Admin',
  },
];

/**
 * @title 
 */
@Component({
  selector: 'app-user-management',
  styleUrls: ['user-management.component.scss'],
  templateUrl: 'user-management.component.html',
})
export class UserManagementComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'select',
    'userID',
    'userName',
    'fecha',
    'userEmail',
    'userRol',
    'Ver Perfil',
    'Edit',
    'Delete',
  ];
  dataSource = new MatTableDataSource<UserInfo>(ELEMENT_DATA);
  selection = new SelectionModel<UserInfo>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: UserInfo): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.userID + 1
    }`;
  }
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(AccountComponent);
  }
}
