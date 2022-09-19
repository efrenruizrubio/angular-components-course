import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent = '';
  showImage: boolean = true;

  onLoaded(img: string) {
    console.log('parent loaded: ' + img);
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
