import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbdModalComponent} from './modal-component';
import {RouterModule, Routes} from '@angular/router'
import { CrewDashboardComponent } from './crew-dashboard/crew-dashboard.component';
import { PortugueseComponent } from './portuguese/portuguese.component';
import { FrenchComponent } from './french/french.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardPagesComponent } from './card-pages/card-pages.component';

const appRoutes: Routes=[
  {path:'',component:CrewDashboardComponent},
  {path:'portuguese',component:PortugueseComponent},
  {path:'french',component:FrenchComponent},
  {path:'cardPages', component:CardPagesComponent},
 

]


@NgModule({
  declarations: [
    AppComponent,
    NgbdModalComponent,
    CrewDashboardComponent,
    PortugueseComponent,
    FrenchComponent,
    CardPagesComponent,
  
 
    
  
 ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes) ,FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
