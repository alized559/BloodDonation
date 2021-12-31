import { DonorsDataService } from './../donors-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newDonor',
  templateUrl: './newDonor.component.html',
  styleUrls: ['./newDonor.component.css']
})
export class NewDonorComponent implements OnInit {

  donor: {fName, lName, email, bloodGrp, address, info} = {fName: "",
   lName: "", email: "", bloodGrp: "", address: "", info: ""};

  isInfected = false;

  submit = false;

  constructor(public donorsDataService: DonorsDataService) { }

  ngOnInit() {
  }

  public addDonor() {
    if (this.donor.fName.length == 0) {
      alert("Enter First Name");
    } else if (this.donor.lName.length == 0) {
      alert("Enter Last Name");
    } else if (this.donor.email.length == 0) {
      alert("Enter Email");
    } else if (this.donor.bloodGrp.length == 0) {
      alert("Enter Blood Group");
    } else if (this.donor.address.length == 0) {
      alert("Enter Address");
    } else if (this.isInfected == false) {
      this.submit = true;
      this.donorsDataService.addDonor(this.donor);
      this.donor = {fName: "", lName: "", email: "", bloodGrp: "", address: "", info: ""};
    } else {
      this.submit = true;
    }
  }

  public ifChecked() {
    this.submit = false;
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
