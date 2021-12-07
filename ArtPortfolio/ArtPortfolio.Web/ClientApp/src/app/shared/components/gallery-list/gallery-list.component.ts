import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GalleryItem } from '../../../models/galleryItem';
import { GalleryDialogComponent } from '../gallery-dialog/gallery-dialog.component';


@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {
  /* galleryItem: GalleryItem; */
  //inject service into component
  @Input() galleryItems: GalleryItem[] = [];
  @Input() selectedArtUrl: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onArtSelected(message: string): void {
    //console.log('Caught event: ' + message);
    this.selectedArtUrl = message;
    //display dialogue after event url
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GalleryDialogComponent, {
      panelClass: 'app-full-bleed-dialog',
      data: { imageUrl: this.selectedArtUrl },
    });

    dialogRef.afterClosed().subscribe(result => {
     
    });
  }
}
