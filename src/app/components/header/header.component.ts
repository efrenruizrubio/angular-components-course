import { Component, OnInit, HostListener } from '@angular/core';
import { LinkHeader } from '@models/linkHeader.model';
import { StoreService } from '@services/store.service';
import { HeaderService } from '@services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  screenWidth: number;
  email: string = 'efren282@outlook.es';
  isMenuOpen: boolean = false;
  counter: number = 0;
  links: LinkHeader[] = [];

  constructor(
    private storeService: StoreService,
    private headerService: HeaderService
  ) {
    this.isMenuOpen = this.headerService.getMenuState();
    this.screenWidth = window.innerWidth;
    this.links = this.headerService.getLinks();
  }

  @HostListener('window:resize', ['$event'])
  setScreenSize() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.headerService.setMenuState();
    this.isMenuOpen = this.headerService.getMenuState();
  }

  toggleActive(i: number) {
    this.headerService.toggleActiveLink(i);
    this.links = this.headerService.getLinks();
  }
}
