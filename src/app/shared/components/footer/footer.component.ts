import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentWindowWidth: number;

  constructor() {}
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }
  ngOnInit(): void {
    this.currentWindowWidth = window.innerWidth;
  }
}
