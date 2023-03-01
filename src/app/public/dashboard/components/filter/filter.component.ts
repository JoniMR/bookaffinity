import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
interface Language {
  value: string;
}

interface OrderBy {
  value: string;
}
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  
  selectedLanguage: string = 'spanish';

  languages: Language[] = [
    {
      value: 'spanish',
    },
    {
      value: 'english',
    },
  ];

  selectedGenre: string = 'Géneros';

  genresForm = new FormControl('');

  genres: string[] = [
    'Historia',
    'Novela negra',
    'Ciencia ficción',
    'Fantasía',
    'Romántica',
    ' Erótica',
    'Terror',
  ];

  selectedOrderBy: string = 'Relevancia';

  orderByForm = new FormControl('');

  orderBy: OrderBy[] = [
    {
      value: 'Relevancia',
    },
    {
      value: 'Precio - De menor a mayor',
    },
    {
      value: 'Precio - De mayor a menor',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
