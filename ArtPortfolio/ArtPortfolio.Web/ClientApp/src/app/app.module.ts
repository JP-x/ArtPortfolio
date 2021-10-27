import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryListComponent } from './shared/components/gallery-list/gallery-list.component';
import { GalleryItemComponent } from './shared/components/gallery-item/gallery-item.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SocialListComponent } from './shared/components/social-list/social-list.component'
import { MatCardModule } from '@angular/material/card';
import { ParallaxDirective } from './shared/directives/parallax.directive';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faGithub, faLinkedin, faInstagram, faTwitch, faTwitter, faEtsy } from '@fortawesome/free-brands-svg-icons';
@NgModule({
  declarations: [
    AppComponent,
    GalleryListComponent,
    GalleryItemComponent,
    HomeComponent,
    GalleryComponent,
    ParallaxDirective,
    SocialListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faGithub, faLinkedin, faInstagram, faTwitch, faTwitter, faEtsy);
  }
}
