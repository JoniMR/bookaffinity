import { Component, OnInit } from '@angular/core';
import { ImgUploadService } from '../../services/img-upload/img-upload.service';

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.scss'],
  providers: [ImgUploadService],
})
export class ImgUploadComponent implements OnInit {

  constructor(private _imguploadService: ImgUploadService) {}

  uploaded: boolean = false;

  ngOnInit(): void {}
  
  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onUpload() {
    if (!this.files[0]) {
      alert('Primero sube una imagen, por favor');
    }

    const data = new FormData();

    this.files.forEach((file_data, index) => {
      console.log('Comenzando subida de la imagen ' + index);
      data.append('file', file_data);
      data.append('upload_preset', 'bookaffinity');
      data.append('cloud_name', 'datafgjir');

      this._imguploadService.uploadImage(data).subscribe((response) => {
        if (response) {
          console.log(response);
          console.log('Subida completada ' + index);
        }
        this.uploaded = true;
      });
    });
  }
  onNewUpload(){
    this.uploaded = false;
  }
}
