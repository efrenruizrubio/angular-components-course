import { Injectable } from '@angular/core';
import { LinkHeader } from '@models/linkHeader.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private isMenuOpen: boolean = false;
  private filterString = new BehaviorSubject<string>('');
  private links: LinkHeader[] = [
    { content: 'All', active: true },
    { content: 'Clothes', active: false },
    { content: 'Electronics', active: false },
    { content: 'Furniture', active: false },
    { content: 'Toys', active: false },
    { content: 'Others', active: false },
  ];

  filterString$ = this.filterString.asObservable();

  setMenuState() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  getMenuState() {
    return this.isMenuOpen;
  }

  getLinks() {
    return this.links;
  }

  toggleActiveLink(i: number) {
    this.links.forEach((link) => (link.active = false));
    this.links[i].active = true;
    this.filterString.next(this.links[i].content);
  }

  constructor() {}
}
