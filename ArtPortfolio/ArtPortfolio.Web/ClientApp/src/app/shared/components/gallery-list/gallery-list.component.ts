import { Component, Input, OnInit } from '@angular/core';
import { GalleryItem } from '../../../models/galleryItem';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {
 /* galleryItem: GalleryItem; */
  //inject service into component
  @Input() galleryItems: GalleryItem[] = [];
  constructor(){}

  ngOnInit(): void {
    console.log();
  }
}
