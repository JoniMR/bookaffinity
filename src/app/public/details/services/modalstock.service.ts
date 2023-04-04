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
export class ModalStockService {
  private updateModalStockUrl: string = 'http://localhost:5000/api/copy/update';
  private createInvoicModalStockUrl: string =
    'http://localhost:5000/api/copy/invoice/create';
  constructor(private http: HttpClient) {}

  updateCopy(
    price: number
  ): Observable<CopyInterface> {
    const body = {
      price: price,
    };
    return this.http.put<CopyInterface>(this.updateModalStockUrl, body);
  }

  createInvoice(
    id_invoice: number,
    id_copy: number,
    id_user: number,
    price: number,
  ): Observable<InvoiceInterface> {
    const body = {
      id_invoice: id_invoice,
      id_copy: id_copy,
      id_user: id_user,
      price: price,
    };
    return this.http.post<InvoiceInterface>(
      this.createInvoicModalStockUrl,
      body
    );
  }
}
