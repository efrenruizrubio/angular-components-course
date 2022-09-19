import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  @Input() img: string = '';
  imageDefault: string = '/assets/images/default.png';
  @Output() loaded = new EventEmitter<string>();

  constructor() {
    //Before render.
    //No Async -- it runs once, when the component is created.
    console.log(`Constructor. Image value: ${this.img}`);
  }

  ngOnChanges() {
    //Before render and during render.
    //Runs when an input changes its value.
    console.log(`ngOnChanges. Image value: ${this.img}`);
  }
  ngOnInit(): void {
    //Before render
    //It can be used for async code, like fetches to an API.
    //It runs once, when the component is created.
    console.log(`ngOnInit. Image value: ${this.img}`);
  }

  ngAfterViewInit() {
    //After render.
    //Handler for the children elements.
    console.log(`ngAfterViewInit`);
  }

  ngOnDestroy() {
    //Delete the component.
    console.log(`ngOnDestroy`);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('child loaded');
    this.loaded.emit(this.img);
  }
}
