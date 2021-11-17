import { Component, OnInit } from '@angular/core';
import { GalleryItem } from '../models/galleryItem';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pageTitle = 'Gallery';
  galleryItems: GalleryItem[] = []
  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleryService.getGallery().subscribe(
      (items) => {
        console.log('gallery items!');
        console.log(items);
        this.galleryItems = items;
      }
    );
  }

}
