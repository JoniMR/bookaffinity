import { Component, OnInit } from '@angular/core';

interface Language {
  value: string;
}

interface Genre {
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

  genres: Genre[] = [
    {
      value: 'Historia',
    },
    {
      value: 'Novela negra',
    },
    {
      value: 'Ciencia ficción',
    },
    {
      value: 'Fantasía',
    },
    {
      value: 'Romántica',
    },
    {
      value: 'Erótica',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}