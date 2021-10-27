import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-list',
  templateUrl: './social-list.component.html',
  styleUrls: ['./social-list.component.css']
})
export class SocialListComponent implements OnInit {
  urlGithub = 'https://github.com';
  urlLinkedIn = 'https://www.linkedin.com/';
  urlInstagram = 'https://instagram.com';
  urlTwitch = 'https://twitch.tv';
  urlTwitter = 'https://twitter.com';
  urlEtsy = 'https://etsy.com';
  constructor() { }

  ngOnInit(): void {
  }

}
