import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NewDonorComponent } from './newDonor/newDonor.component';
import { SearchDonorComponent } from './searchDonor/searchDonor.component';
import { AdsPanelComponent } from './adsPanel/adsPanel.component';
import { ContactUsComponent } from './contactUs/contactUs.component';

@NgModule({
  declarations: [								
    AppComponent,
      HeaderComponent,
      HomeComponent,
      FooterComponent,
      NewDonorComponent,
      SearchDonorComponent,
      AdsPanelComponent,
      ContactUsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
