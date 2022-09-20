import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  img: string = '';
  @Input() alt: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change only the img', this.img);
  }

  /* @Input() img: string = '';
  @Input() alt: string = ''; */

  // counter: number = 0;
  // counterFn: number | undefined;
  imageDefault: string = '/assets/images/default.png';

  @Output() loaded = new EventEmitter<string>();

  constructor() {
    //Before render.
    //No Async -- it runs once, when the component is created.
    console.log(`Constructor. Image value: ${this.img}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    //Before render and during render.
    //Runs when an input changes its value.
    console.log(`ngOnChanges. Image value: ${this.img}`);
    console.log(changes);
  }
  ngOnInit(): void {
    //Before render
    //It can be used for async code, like fetches to an API.
    //It runs once, when the component is created.
    console.log(`ngOnInit. Image value: ${this.img}`);
    /* this.counterFn = window.setInterval(() => {
      this.counter++;
      console.log(this.counter);
    }, 1000); */
  }

  ngAfterViewInit() {
    //After render.
    //Handler for the children elements.
    console.log(`ngAfterViewInit`);
  }

  ngOnDestroy() {
    //Delete the component.
    console.log(`ngOnDestroy`);
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('child loaded');
    this.loaded.emit(this.img);
  }
}
