import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonorsDataService {

  donor = [
    {fName: "Ali", lName: "Zein Al Dine", email: "alized559@gmail.com",
      bloodGrp: "O+", address: "Beirut, Lebanon", info: ""},
    {fName: "Donor", lName: "", email: "donor@gmail.com",
      bloodGrp: "O-", address: "Akkar", info: ""},
    {fName: "Donor", lName: "", email: "donor1@gmail.com",
      bloodGrp: "O-", address: "Akkar", info: ""},
    {fName: "Donor", lName: "", email: "donor2@gmail.com",
      bloodGrp: "O+", address: "Tripoly", info: ""},
    {fName: "Donor", lName: "", email: "donor3@gmail.com",
      bloodGrp: "O+", address: "Tripoly", info: ""},
    {fName: "Donor", lName: "", email: "donor4@gmail.com",
      bloodGrp: "A+", address: "Nabatieh", info: ""},
    {fName: "Donor", lName: "", email: "donor5@gmail.com",
      bloodGrp: "A+", address: "Nabatieh", info: ""},
    {fName: "Donor", lName: "", email: "donor6@gmail.com",
      bloodGrp: "A+", address: "Nabatieh", info: ""},
    {fName: "Donor", lName: "", email: "donor7@gmail.com",
      bloodGrp: "B+", address: "Saida", info: ""},
    {fName: "Donor", lName: "", email: "donor8@gmail.com",
      bloodGrp: "B+", address: "Saida", info: ""},
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
