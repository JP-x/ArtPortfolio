import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jonathan Portfolio';
  pageTitle = 'Artist Portfolio'
  logoUrl = 'https://cdn-endpoint-artist-portfolio.azureedge.net/artist-portfolio/assets/jonp_logo_simple.png';
  logoUrlLight = 'https://cdn-endpoint-artist-portfolio.azureedge.net/artist-portfolio/assets/jonp_logo_black_simple.png';
  logoUrlDark = 'https://cdn-endpoint-artist-portfolio.azureedge.net/artist-portfolio/assets/jonp_logo_simple.png';
  bgUrl = 'https://cdn-endpoint-artist-portfolio.azureedge.net/artist-portfolio/assets/bg_vid2.mp4'
  createdBy = 'Jonathan Padilla'
  year: number = new Date().getFullYear();
}
