import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { GalleryItem } from '../models/galleryItem';
import { HomeViewModel } from '../models/homeViewModel';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private homeUrl = 'api/home';

  constructor(private http: HttpClient) { }
  getHome(): Observable<HomeViewModel> {
    return this.http.get<HomeViewModel>(this.homeUrl);
  }

}
