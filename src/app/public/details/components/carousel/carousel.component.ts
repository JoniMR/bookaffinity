import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  currentPage: number = 0;
  itemIndex: number = 0;
  photos: string[]
  selectedPhotos: string[]
  id : number

  photosDefault: string[] = [
    'https://media.karousell.com/media/photos/products/2015/10/11/a_project_guide_to_ux_design_for_user_experience_designers_guide_book_1444559799_5757a608.jpg',
    'https://images.squarespace-cdn.com/content/v1/5e0129c5956b7a5624566864/1601792163210-8D766XYHP41B2VRYZFYV/pro-angular-9.png?format=1000w',
    'https://cdn.shopify.com/s/files/1/0330/7333/products/PXL_20221219_153213154_608x760.jpg?v=1671811225',
    'https://media.karousell.com/media/photos/products/2015/10/11/a_project_guide_to_ux_design_for_user_experience_designers_guide_book_1444559799_5757a608.jpg',
    'https://images.squarespace-cdn.com/content/v1/5e0129c5956b7a5624566864/1601792163210-8D766XYHP41B2VRYZFYV/pro-angular-9.png?format=1000w',
    'https://cdn.shopify.com/s/files/1/0330/7333/products/PXL_20221219_153213154_608x760.jpg?v=1671811225',
    'https://media.karousell.com/media/photos/products/2015/10/11/a_project_guide_to_ux_design_for_user_experience_designers_guide_book_1444559799_5757a608.jpg',
    'https://images.squarespace-cdn.com/content/v1/5e0129c5956b7a5624566864/1601792163210-8D766XYHP41B2VRYZFYV/pro-angular-9.png?format=1000w',
    'https://cdn.shopify.com/s/files/1/0330/7333/products/PXL_20221219_153213154_608x760.jpg?v=1671811225',
    'https://media.karousell.com/media/photos/products/2015/10/11/a_project_guide_to_ux_design_for_user_experience_designers_guide_book_1444559799_5757a608.jpg',
    'https://images.squarespace-cdn.com/content/v1/5e0129c5956b7a5624566864/1601792163210-8D766XYHP41B2VRYZFYV/pro-angular-9.png?format=1000w',
    'https://cdn.shopify.com/s/files/1/0330/7333/products/PXL_20221219_153213154_608x760.jpg?v=1671811225',
  ]

  photosQuijote: string[] = [ // ID: 1
      'https://images.milanuncios.com/api/v1/ma-ad-media-pro/images/16903a22-8213-41b5-8006-59f185dcae15?rule=hw396_70',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKWkbxWNupkbLYlcFBdQubocPlhE9vu_kBw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_sCneqPv-TknYq5f6ZMM8Hth8SYWFTSUKcw&usqp=CAU',
      'https://1.bp.blogspot.com/-YEQ89-Ai5OY/YU2o2y_IyYI/AAAAAAAA6F4/ejK5P8uWg7YNPTGCu6awjbniLe_EhSaTQCNcBGAsYHQ/w1200-h630-p-k-no-nu/don%2Bquijote%2Bde%2Bla%2Bmancha.jpg',
      'https://libreriacarrera.com/12212-large_default/don-quijote-de-la-mancha-miguel-de-cervantes-edimat.jpg',
      'https://sergiouceda.com/wp-content/uploads/2011/12/quijote1.jpg',
      'https://estaticosgn-cdn.deia.eus/clip/e0b524dc-3ecf-4b51-9624-d7fce2fbf05d_16-9-aspect-ratio_default_0.jpg',
      'https://www.cambio16.com/wp-content/uploads/2023/02/Libros-abediciones-sep2022-11.jpg',
      'https://fotografias.larazon.es/clipping/cmsimages01/2019/08/13/72D0FA02-460E-4D12-B571-9DB830F111D8/98.jpg?crop=1011,569,x0,y55&width=1900&height=1069&optimize=low&format=webply',
      'https://cloud10.todocoleccion.online/libros-clasicos-segunda-mano/tc/2023/01/15/18/386814329_478474274.jpg',
      'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2016/03/31/160331145543_primer_folio_624x351_ap_nocredit.jpg',
      'https://pbs.twimg.com/media/EWR2vuVXkAALdyk?format=jpg&name=large'
  ]

  photosIsabel : string[] =[ // ID: 5
    'https://libros.eco/wp-content/uploads/2021/05/La-casa-de-los-espiritus.jpg',
    'https://pictures.abebooks.com/inventory/md/md31292290812.jpg',
    'https://librosenlinea.co/wp-content/uploads/2020/11/la-casa-de-los-espiritus.jpg',
    'https://http2.mlstatic.com/D_NQ_NP_987066-MLC48822367011_012022-O.jpg',
    'https://http2.mlstatic.com/D_NQ_NP_844719-MLA49424277359_032022-O.webp',
    'https://i.ebayimg.com/images/g/7qIAAOSwpN5jsLOU/s-l1600.jpg'
  ]   
    
  photosAleph:string[] = [ // ID: 6
    'http://pedrosorela.com/wp-content/uploads/2020/05/Aleph.jpg',
    'https://cloud10.todocoleccion.online/libros-clasicos-segunda-mano/tc/2022/05/16/21/339927143_413622703_tcimg_AF52B6F4.jpg',
    'https://pictures.abebooks.com/inventory/md/md31163932106.jpg',
  ] 
    
  photosLaberinto: string[] = [ // ID: 8
    'https://cloud10.todocoleccion.online/libros-ensayo/tc/2021/01/26/15/237317570.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWBVGntJHnosa-JB8P8Gzk2itufDr-gSi6Q&usqp=CAU',
    'https://cdn.coordiutil.com/imagen-el_laberinto_de_la_soledadpostdatavuelta_al_laberinto_de_la_soledad_octavio_paz-2058218-800-600-1-75.jpg',
    'https://cloud10.todocoleccion.online/libros-segunda-mano/tc/2012/11/06/001313_2.JPG'
  ]   
    
  photosCampocastilla:string[] = [ // ID: 10
    'https://libreriaeldesvan.com/4186-large_default/campos-de-castilla-edicion-facsimil.jpg',
    'https://www.trotalibroslowcost.es/imagenes/9788481/978848130117.JPG',
    'http://www.librosambigu.com/static/img/portadas/campos-de-castilla_106926.JPG'
  ] 

  indexIncrease(): void {}

  nextPage(): void {
    if (this.photos[(this.currentPage+1) * 5]) {
      this.currentPage += 1;
      this.fillRow();
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) this.currentPage -= 1;
  }

  fillRow(): void {
    for (let i = this.currentPage * 5; i < this.currentPage * 5 + 5; i++) {
      if (!this.photos[i]) {
        this.photos.push('no-photo');
      }
    }
  }

  setImagesForCarousel(){
    this.id = history.state.id != undefined ? history.state.id : 0;

    switch (this.id) {
      case 1:
        this.selectedPhotos = this.photosQuijote
        break;
      case 5:
        this.selectedPhotos = this.photosIsabel      
        break;
      case 6:
        this.selectedPhotos = this.photosAleph
        break;
      case 8:
        this.selectedPhotos = this.photosLaberinto
        break;
      case 10:
        this.selectedPhotos = this.photosCampocastilla
        break;
      default:
        this.selectedPhotos = this.photosDefault
        break;
    }

    this.photos = this.selectedPhotos
  }

  constructor() {}

  ngOnInit(): void {
    
    this.setImagesForCarousel()
    this.fillRow();
  }
}
