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
  FACEBOOK: number = 1;
  INSTAGRAM: number = 2;
  TWITTER: number = 3;
  YOUTUBE: number = 4;

  constructor() {}

  ngOnInit(): void {
    this.fillCards();
  }

  private fillCards() {
    this.cardsDashboard = new Array<CardMainDashboard>();
    let facebookCard: CardMainDashboard = {
      socialNetworkIcon: '../../assets/dashboard/icon-facebook.svg',
      socialNetworkUsername: '@nathanf',
      numberOfFollowers: '1987',
      followerType: 'Followers',
      numberOfDays: 12,
      socialNetworkType: this.FACEBOOK,
    };

    let twitterCard: CardMainDashboard = {
      socialNetworkIcon: '../../assets/dashboard/icon-twitter.svg',
      socialNetworkUsername: '@nathanf',
      numberOfFollowers: '1044',
      followerType: 'Followers',
      numberOfDays: 99,
      socialNetworkType: this.TWITTER
    };

    let instagramCard: CardMainDashboard = {
      socialNetworkIcon: '../../assets/dashboard/icon-instagram.svg',
      socialNetworkUsername: '@realnathanf',
      numberOfFollowers: '11k',
      followerType: 'Followers',
      numberOfDays: 1099,
      socialNetworkType: this.INSTAGRAM
    };

    let youtubeCard: CardMainDashboard = {
      socialNetworkIcon: '../../assets/dashboard/icon-youtube.svg',
      socialNetworkUsername: 'Nathan F.',
      numberOfFollowers: '8239',
      followerType: 'Subscribers',
      numberOfDays: 144,
      socialNetworkType: this.YOUTUBE
    };

    this.cardsDashboard.push(facebookCard);
    this.cardsDashboard.push(twitterCard);
    this.cardsDashboard.push(instagramCard);
    this.cardsDashboard.push(youtubeCard);

    let viewsFacebookCard: CardMainDashboard = {
      socialNetworkIcon: '../../assets/dashboard/icon-facebook.svg',
      socialNetworkUsername: 'Page Views',
      numberOfFollowers: '87',
      followerType: '',
      numberOfDays: 3,
      socialNetworkType: this.FACEBOOK
    };
  }
}
