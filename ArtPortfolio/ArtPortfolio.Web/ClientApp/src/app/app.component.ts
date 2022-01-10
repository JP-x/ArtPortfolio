import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Artist Portfolio';
  pageTitle = 'Artist Portfolio'
  logoUrl = 'https://cdn-endpoint-artist-portfolio.azureedge.net/artist-portfolio/assets/jippu_logo_simple.jpg';
  logoUrlLight = 'https://cdn-endpoint-artist-portfolio.azureedge.net/artist-portfolio/assets/jippu_logo_black.png';
  logoUrlDark = 'https://cdn-endpoint-artist-portfolio.azureedge.net/artist-portfolio/assets/jippu_logo_simple_logo_only.png';
  createdBy = 'Jonathan Padilla'
  year: number = new Date().getFullYear();
}
