import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GalleryListComponent } from './shared/components/gallery-list/gallery-list.component';
import { GalleryItemComponent } from './shared/components/gallery-item/gallery-item.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SocialListComponent } from './shared/components/social-list/social-list.component'
import { GalleryDialogComponent } from './shared/components/gallery-dialog/gallery-dialog.component';

import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ParallaxDirective } from './shared/directives/parallax.directive';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faGithub, faLinkedin, faInstagram, faTwitch, faTwitter, faEtsy } from '@fortawesome/free-brands-svg-icons';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    GalleryListComponent,
    GalleryItemComponent,
    HomeComponent,
    GalleryComponent,
    ParallaxDirective,
    SocialListComponent,
    GalleryDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatPaginatorModule,
    FontAwesomeModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faGithub, faLinkedin, faInstagram, faTwitch, faTwitter, faEtsy);
  }
}
