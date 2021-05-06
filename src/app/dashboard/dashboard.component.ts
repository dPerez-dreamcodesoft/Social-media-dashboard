import { Component, OnInit } from '@angular/core';
import { CardMainDashboard } from '../models/card-main-dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public cardsDashboard: Array<CardMainDashboard>;
  public cardsOverview: Array<CardMainDashboard>;
  FACEBOOK_COLOR: number = 1;
  INSTAGRAM_COLOR: number = 2;
  TWITTER_COLOR: number = 3;
  YOUTUBE_COLOR: number = 4;

  FACEBOOK_ICON:string='../../assets/dashboard/icon-facebook.svg';
  TWITTER_ICON:string='../../assets/dashboard/icon-twitter.svg';
  INSTAGRAM_ICON:string='../../assets/dashboard/icon-instagram.svg';
  YOUTUBE_ICON:string='../../assets/dashboard/icon-youtube.svg';


  constructor() {}

  ngOnInit(): void {
    this.fillCards();
  }

  private fillCards() {
    this.cardsDashboard = new Array<CardMainDashboard>();
    let facebookCard: CardMainDashboard = {
      socialNetworkIcon: this.FACEBOOK_ICON,
      socialNetworkUsername: '@nathanf',
      numberOfFollowers: '1987',
      followerType: 'Followers',
      numberOfDays: 12,
      socialNetworkType: this.FACEBOOK_COLOR,
    };

    let twitterCard: CardMainDashboard = {
      socialNetworkIcon: this.TWITTER_ICON,
      socialNetworkUsername: '@nathanf',
      numberOfFollowers: '1044',
      followerType: 'Followers',
      numberOfDays: 99,
      socialNetworkType: this.TWITTER_COLOR
    };

    let instagramCard: CardMainDashboard = {
      socialNetworkIcon: this.INSTAGRAM_ICON,
      socialNetworkUsername: '@realnathanf',
      numberOfFollowers: '11k',
      followerType: 'Followers',
      numberOfDays: 1099,
      socialNetworkType: this.INSTAGRAM_COLOR
    };

    let youtubeCard: CardMainDashboard = {
      socialNetworkIcon: this.YOUTUBE_ICON,
      socialNetworkUsername: 'Nathan F.',
      numberOfFollowers: '8239',
      followerType: 'Subscribers',
      numberOfDays: 144,
      socialNetworkType: this.YOUTUBE_COLOR
    };

    this.cardsDashboard.push(facebookCard);
    this.cardsDashboard.push(twitterCard);
    this.cardsDashboard.push(instagramCard);
    this.cardsDashboard.push(youtubeCard);

    let viewsFacebookCard: CardMainDashboard = {
      socialNetworkIcon: this.FACEBOOK_ICON,
      socialNetworkUsername: 'Page Views',
      numberOfFollowers: '87',
      followerType: '',
      numberOfDays: 3,
      socialNetworkType: this.FACEBOOK_COLOR
    };
  }
}
