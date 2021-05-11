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
  public isChecked = false;

  FACEBOOK_COLOR: number = 1;
  INSTAGRAM_COLOR: number = 2;
  TWITTER_COLOR: number = 3;
  YOUTUBE_COLOR: number = 4;

  FACEBOOK_ICON: string = '../../assets/dashboard/icon-facebook.svg';
  TWITTER_ICON: string = '../../assets/dashboard/icon-twitter.svg';
  INSTAGRAM_ICON: string = '../../assets/dashboard/icon-instagram.svg';
  YOUTUBE_ICON: string = '../../assets/dashboard/icon-youtube.svg';

  constructor() {}

  ngOnInit(): void {
    this.fillCards();
  }

  private fillCards() {
    this.cardsDashboard = new Array<CardMainDashboard>();
    this.cardsOverview = new Array<CardMainDashboard>();

    let facebookCard: CardMainDashboard = {
      socialNetworkIcon: this.FACEBOOK_ICON,
      socialNetworkUsername: '@nathanf',
      numberOfFollowers: '1987',
      followerType: 'Followers',
      numberOfDays: 12,
      socialNetworkType: this.FACEBOOK_COLOR,
      isPositive: true,
    };

    let twitterCard: CardMainDashboard = {
      socialNetworkIcon: this.TWITTER_ICON,
      socialNetworkUsername: '@nathanf',
      numberOfFollowers: '1044',
      followerType: 'Followers',
      numberOfDays: 99,
      socialNetworkType: this.TWITTER_COLOR,
      isPositive: true,
    };

    let instagramCard: CardMainDashboard = {
      socialNetworkIcon: this.INSTAGRAM_ICON,
      socialNetworkUsername: '@realnathanf',
      numberOfFollowers: '11k',
      followerType: 'Followers',
      numberOfDays: 1099,
      socialNetworkType: this.INSTAGRAM_COLOR,
      isPositive: true,
    };

    let youtubeCard: CardMainDashboard = {
      socialNetworkIcon: this.YOUTUBE_ICON,
      socialNetworkUsername: 'Nathan F.',
      numberOfFollowers: '8239',
      followerType: 'Subscribers',
      numberOfDays: 144,
      socialNetworkType: this.YOUTUBE_COLOR,
      isPositive: false,
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
      socialNetworkType: this.FACEBOOK_COLOR,
      isPositive: true,
    };

    let likesFacebookCard: CardMainDashboard = {
      socialNetworkIcon: this.FACEBOOK_ICON,
      socialNetworkUsername: 'Likes',
      numberOfFollowers: '52',
      followerType: '',
      numberOfDays: 2,
      socialNetworkType: this.FACEBOOK_COLOR,
      isPositive: true,
    };

    let viewsInstagramCard: CardMainDashboard = {
      socialNetworkIcon: this.INSTAGRAM_ICON,
      socialNetworkUsername: 'Profile Views',
      numberOfFollowers: '52k',
      followerType: '',
      numberOfDays: 1375,
      socialNetworkType: this.INSTAGRAM_COLOR,
      isPositive: true,
    };

    let likesInstagramCard: CardMainDashboard = {
      socialNetworkIcon: this.INSTAGRAM_ICON,
      socialNetworkUsername: 'Likes',
      numberOfFollowers: '5462',
      followerType: '',
      numberOfDays: 2257,
      socialNetworkType: this.INSTAGRAM_COLOR,
      isPositive: true,
    };

    let reTweetsCard: CardMainDashboard = {
      socialNetworkIcon: this.TWITTER_ICON,
      socialNetworkUsername: 'Retweets',
      numberOfFollowers: '117',
      followerType: '',
      numberOfDays: 303,
      socialNetworkType: this.TWITTER_COLOR,
      isPositive: true,
    };

    let likesTwitterCard: CardMainDashboard = {
      socialNetworkIcon: this.TWITTER_ICON,
      socialNetworkUsername: 'Likes',
      numberOfFollowers: '507',
      followerType: '',
      numberOfDays: 553,
      socialNetworkType: this.TWITTER_COLOR,
      isPositive: true,
    };

    let viewsYoutubeCard: CardMainDashboard = {
      socialNetworkIcon: this.YOUTUBE_ICON,
      socialNetworkUsername: 'Total Views',
      numberOfFollowers: '1407',
      followerType: '',
      numberOfDays: 12,
      socialNetworkType: this.YOUTUBE_COLOR,
      isPositive: false,
    };

    let likesYoutubeCard: CardMainDashboard = {
      socialNetworkIcon: this.YOUTUBE_ICON,
      socialNetworkUsername: 'Likes',
      numberOfFollowers: '107',
      followerType: '',
      numberOfDays: 19,
      socialNetworkType: this.YOUTUBE_COLOR,
      isPositive: false,
    };

    this.cardsOverview.push(viewsFacebookCard);
    this.cardsOverview.push(likesFacebookCard);
    this.cardsOverview.push(likesInstagramCard);
    this.cardsOverview.push(viewsInstagramCard);
    this.cardsOverview.push(reTweetsCard);
    this.cardsOverview.push(likesTwitterCard);
    this.cardsOverview.push(likesYoutubeCard);
    this.cardsOverview.push(viewsYoutubeCard);
  }

  public setToDarkMode() {
    this.isChecked = !this.isChecked;
    //const elementsList = document.querySelectorAll('#dashboard-card-id');
    var elms = document.querySelectorAll("[id='dashboard-card-id']");
    let followersStyle = document.querySelectorAll("[id='follower-id");
    let followersTypeStyle = document.querySelectorAll("[id='follower-type-id");
    let cardsTitleStyle = document.querySelectorAll("[id='card-title-id");

    let overviewCards=document.querySelectorAll("[id='dashboard-cards-id']");
    let overviewFollowersStyle=document.querySelectorAll("[id='overview-follower-id']");

    let mainTitle=document.getElementById("main-title-id");
    let overviewText=document.getElementById("overview-id");
    let mainPageStyle=document.getElementById("main-page-id");
    let indexStyle=document.getElementById("index-id");
   
    for (let i = 0; i < elms.length; i++) {
      let elemento: HTMLElement = <HTMLScriptElement>elms[i];
      let followerStyle: HTMLElement = <HTMLScriptElement>followersStyle[i];
      let followerTypeStyle: HTMLElement = <HTMLScriptElement>followersTypeStyle[i];
      let cardTitleStyle: HTMLElement = <HTMLScriptElement>cardsTitleStyle[i];
      if (this.isChecked) {
        elemento.style.background = 'hsl(228, 28%, 20%)';
        followerStyle.style.color = 'hsl(0, 0%, 100%)';
        followerTypeStyle.style.color = 'hsl(228, 12%, 44%)';
        cardTitleStyle.style.color = '#8C93BE';
        mainTitle.style.color="white";
        overviewText.style.color="white";
        mainPageStyle.style.background="hsl(230, 17%, 14%)";
        indexStyle.style.background="hsl(230, 17%, 14%)";
      } else {
        elemento.style.background = '#f0f2fa';
        followerStyle.style.color = 'hsl(230, 17%, 14%)';
        followerTypeStyle.style.color = 'hsl(228, 34%, 66%)';
        cardTitleStyle.style.color = '#7A83A2';
        mainTitle.style.color="black";
        overviewText.style.color="#6d737e";
        mainPageStyle.style.background="white";
        indexStyle.style.background="white"

        // let intro2 = document.getElementById('dashboard-card-id');
        // intro2.style.background = '#f0f2fa';
      }
    }

    for (let i = 0; i < overviewCards.length; i++) {
      let cardBackgrond: HTMLElement = <HTMLScriptElement>overviewCards[i];
      let overviewFollowerStyle: HTMLElement = <HTMLScriptElement>overviewFollowersStyle[i];
      if (this.isChecked) {
        cardBackgrond.style.background = 'hsl(228, 28%, 20%)';
        overviewFollowerStyle.style.color="white";
      }else{
        cardBackgrond.style.background = '#f0f2fa';
        overviewFollowerStyle.style.color="black";


      }
      
    }
  }
}
