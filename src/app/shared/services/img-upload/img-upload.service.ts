import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImgUploadService {
  constructor(private _http: HttpClient) {}

  uploadImage(vals: any): Observable<any> {
    let data = vals;

    return this._http.post(
      'https://api.cloudinary.com/v1_1/datafgjir/image/upload',
      data
    );
  }
}
