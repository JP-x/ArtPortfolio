import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  imageUrl: string;
}

@Component({
  selector: 'app-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.css']
})
export class GalleryDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<GalleryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
