import { DonorsDataService } from './../donors-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchDonor',
  templateUrl: './searchDonor.component.html',
  styleUrls: ['./searchDonor.component.css']
})
export class SearchDonorComponent implements OnInit {

  sameGrpDonors;
  selectedDonor;

  constructor(public donorsDataService: DonorsDataService) { }

  ngOnInit() {
  }

  public setDonorsByGroup(group) {
    this.sameGrpDonors = this.donorsDataService.getDonorsByGroup(group);
  }

  public selectDonor(donor) {
    this.selectedDonor = donor;
  }

  ngAfterViewInit() {
    var button = <HTMLVideoElement> document.getElementById("scroll");
    
    var nav =  <HTMLVideoElement> document.getElementById("nav");
    var navImage = <HTMLVideoElement> document.getElementById("navImg");

    window.onscroll = function() {
      change();
    };
    
    function change() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
        nav.style.backgroundColor = "#A52A2A";
        navImage.style.width = "30px";
      } else {
        button.style.display = "none";
        nav.style.backgroundColor = "transparent";
        navImage.style.width = "50px";
      }
    }
  }

  scroll() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
