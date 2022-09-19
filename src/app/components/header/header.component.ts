import { Component, OnInit, HostListener } from '@angular/core';
import { LinkHeader } from '@models/linkHeader.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  screenWidth: number;
  email: string = 'efren282@outlook.es';
  isMenuOpen: boolean = false;
  links: LinkHeader[] = [
    { content: 'All', ref: '#', active: false },
    { content: 'Clothes', ref: '#', active: false },
    { content: 'Electronics', ref: '#', active: false },
    { content: 'Furniture', ref: '#', active: false },
    { content: 'Toys', ref: '#', active: false },
    { content: 'Others', ref: '#', active: false },
  ];

  constructor() {
    this.screenWidth = window.innerWidth;
    this.getScreenSize();
  }

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleActive(i: number) {
    this.links.forEach((link) => (link.active = false));
    this.links[i].active = true;
    console.log(this.links);
  }
}
