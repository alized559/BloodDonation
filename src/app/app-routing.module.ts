import { NewDonorComponent } from './newDonor/newDonor.component';
import { ContactUsComponent } from './contactUs/contactUs.component';
import { SearchDonorComponent } from './searchDonor/searchDonor.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'newDonor', component: NewDonorComponent },
  { path: 'searchDonor', component: SearchDonorComponent },
  { path: 'contact', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
