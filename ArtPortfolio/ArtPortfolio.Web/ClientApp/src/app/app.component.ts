import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Artist Portfolio';
  pageTitle = 'Artist Portfolio'
  logoUrl = '../assets/Sample_Logo_640x320.png';
  createdBy = 'Jonathan Padilla'
  year: number = new Date().getFullYear();
}
