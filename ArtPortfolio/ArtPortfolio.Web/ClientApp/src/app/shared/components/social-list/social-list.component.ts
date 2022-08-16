import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-list',
  templateUrl: './social-list.component.html',
  styleUrls: ['./social-list.component.css']
})
export class SocialListComponent implements OnInit {
  urlGithub = 'https://github.com/JP-x';
  urlLinkedIn = 'https://www.linkedin.com/in/jonathanpadilla4/';
  urlInstagram = '';
  urlTwitch = '';
  urlTwitter = '';
  urlEtsy = '';
  constructor() { }

  ngOnInit(): void {
  }

}
