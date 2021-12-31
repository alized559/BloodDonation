import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdsDataService {

  ads = [
    {title: "Double Spicy MvChicken", body: "This is an ad", link: "https://www.facebook.com/281110965314147/posts/4641316969293503/", linkText: "Facebook Post"},
    {title: "Coolest Sweater for the Coolest Boy!", body: "This is an ad", link: "https://www.facebook.com/156149568139189/posts/1306747123079422/", linkText: "Facebook Post"},
    {title: "Sneakers Sport", body: "This is an ad", link: "https://dribbble.com/shots/15536680-Shoe-Advertisement#", linkText: "Open Google"},
    {title: "CIS College", body: "This is an ad", link: "https://www.instagram.com/p/CX_ymz0DMz-/", linkText: "Instagram Post"},
    {title: "Fresh Up!", body: "This is an ad", link: "https://www.pixtastock.com/illustration/44998468", linkText: "Open Google"},
  ];

  constructor() { }

  public getAds(): Array<{title, body, link, linkText}> {
    return this.ads;
  }
}
