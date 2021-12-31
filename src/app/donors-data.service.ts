import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonorsDataService {

  donor = [
    {fName: "Ali", lName: "Zein Al Dine", email: "alized559@gmail.com",
    bloodGrp: "O+", address: "Beirut, Lebanon", info: ""},
  ];

  sameGrpDonor;

  constructor() { }

  public getDonorsByGroup(group): Array<{fName, lName, email, bloodGrp, address, info}> {
    this.sameGrpDonor =  [];
    for (let value of this.donor) {
      if (value.bloodGrp === group) {
        this.sameGrpDonor.push(value);
      }
    }
    return this.sameGrpDonor;
  }

  public addDonor(donor) {
    this.donor.push(donor);
  }
}
