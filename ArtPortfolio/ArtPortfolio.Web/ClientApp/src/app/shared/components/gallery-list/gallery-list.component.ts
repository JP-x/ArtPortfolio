import { Component, OnInit } from '@angular/core';
import { GalleryItem } from '../../../models/galleryItem';
import { GalleryService } from '../../../services/gallery.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {
 /* galleryItem: GalleryItem; */
  //inject service into component
  galleryItems: GalleryItem[] = [];
  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.getGallery().subscribe(
      (items) => {
        console.log('gallery items!');
        console.log(items);
        this.galleryItems = items;
      }
    );
  }

  counter(i: number) {
    return new Array(i);
  }
}
