import { AdsDataService } from './../ads-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adsPanel',
  templateUrl: './adsPanel.component.html',
  styleUrls: ['./adsPanel.component.css']
})
export class AdsPanelComponent implements OnInit {

  ads;

  constructor(public adsDataService: AdsDataService) { }

  ngOnInit() {
    this.ads = this.adsDataService.getAds();
  }

}
