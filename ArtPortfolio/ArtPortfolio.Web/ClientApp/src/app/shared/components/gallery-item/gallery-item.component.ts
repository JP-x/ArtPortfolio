import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  //emit the "notify" event
  @Output() artSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  //emit the "notify" event
  onClick() {
    //console.log(this.itemTitle + ' clicked!');
    this.artSelected.emit(this.imageUrl);
  }
}
