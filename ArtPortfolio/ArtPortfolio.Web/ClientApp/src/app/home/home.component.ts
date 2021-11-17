import { Component, OnInit } from '@angular/core';
import { HomeViewModel } from '../models/homeViewModel';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitle = 'Home';
  homeViewModel !: HomeViewModel;
  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.homeService.getHome().subscribe(
      (home) => {
        console.log('Home items!');
        console.log(home);
        this.homeViewModel = home;
      }
    );
  }

}
