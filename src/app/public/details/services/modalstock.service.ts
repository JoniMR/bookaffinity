import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  UserInterface,
  InvoiceInterface,
  CopyInterface,
  ImgCopyInterface,
} from '../models/modalstock.model';

@Injectable({
  providedIn: 'root',
})
export class ModalstockService {
  private updateModalStockUrl: string = 'http://localhost:5000/api/copy/update';
  private createInvoicModalStockUrl: string =
    'http://localhost:5000/api/copy/invoice/create';
  constructor(private http: HttpClient) {}

  updateCopy(
    id_copy: number,
    id_user: number,
    id_book: number,
    visible: number,
    status: string,
    price: number
  ): Observable<CopyInterface> {
    const body = {
      id_copy: id_copy,
      id_user: id_user,
      id_book: id_book,
      visible: visible,
      status: status,
      price: price,
    };
    return this.http.put<CopyInterface>(this.updateModalStockUrl, body);
  }

  createInvoice(
    id_invoice: number,
    id_copy: number,
    id_user: number
  ): Observable<InvoiceInterface> {
    const body = {
      id_invoice: id_invoice,
      id_copy: id_copy,
      id_user: id_user,
    };
    return this.http.post<InvoiceInterface>(
      this.createInvoicModalStockUrl,
      body
    );
  }
}
