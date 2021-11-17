import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
  @Input() imageUrl = '';
  @Input() imageUrlThumbnail = '';
  @Input() itemArtist = '';
  @Input() itemTitle = '';

  constructor() { }

  ngOnInit(): void {
    //this.selectSampleImg();
  }

  private getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  selectSampleImg() {
    this.imageUrl = '../../../assets/Sample_400x600.png';
    this.itemArtist = 'Artist J';
    this.itemTitle = 'item title J ';
    /*
    const randomNum = Math.floor(this.getRandomArbitrary(0, 100));
    //console.log('Random Num: ' + randomNum);
    if (randomNum % 2 === 0) {
      this.imageUrl = '../../../assets/Sample_320x320.png';
      this.itemArtist = 'Artist J';
      this.itemTitle = 'item title J ';
    }
    else {
      this.imageUrl = '../../../assets/Sample_400x600.png';
      this.itemArtist = 'Artist A';
      this.itemTitle = 'item title A';
    }
    */
  }

}
