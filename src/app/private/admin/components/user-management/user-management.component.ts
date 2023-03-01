import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

export interface UserInfo {
  userID: number;
  userName: string;
  fecha: string;
  userEmail: string;
  userRol: string;
}

const ELEMENT_DATA: UserInfo[] = [
{userID: 1, userName: 'Hydrogen', fecha: '30/11/999', userEmail: 'prueba@babelgroup.com', userRol: 'Admin'},
{userID: 2, userName: 'Hydrogen', fecha: '30/11/999', userEmail: 'prueba@babelgroup.com', userRol: 'Admin'},
{userID: 3, userName: 'Hydrogen', fecha: '30/11/999', userEmail: 'prueba@babelgroup.com', userRol: 'Admin'},
{userID: 4, userName: 'Hydrogen', fecha: '30/11/999', userEmail: 'prueba@babelgroup.com', userRol: 'Admin'},
{userID: 5, userName: 'Hydrogen', fecha: '30/11/999', userEmail: 'prueba@babelgroup.com', userRol: 'Admin'},
{userID: 6, userName: 'Hydrogen', fecha: '30/11/999', userEmail: 'prueba@babelgroup.com', userRol: 'Admin'},
{userID: 7, userName: 'Hydrogen', fecha: '30/11/999', userEmail: 'prueba@babelgroup.com', userRol: 'Admin'},
];

/**
 * @title Table with selection
 */
@Component({
  selector: 'app-user-management',
  styleUrls: ['user-management.component.scss'],
  templateUrl: 'user-management.component.html',
})
export class UserManagementComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = ['select', 'userID', 'userName', 'fecha', 'userEmail', 'userRol','Edit', 'Delete'];
  dataSource = new MatTableDataSource<UserInfo>(ELEMENT_DATA);
  selection = new SelectionModel<UserInfo>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: UserInfo): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.userID + 1}`;
  }
}