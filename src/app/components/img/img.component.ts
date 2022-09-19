import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {
  @Input() img: string = '';
  imageDefault: string = '/assets/images/default.png';
  @Output() loaded = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('child loaded');
    this.loaded.emit(this.img);
  }
}
