import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './Shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { MatDividerModule, MatDialogModule, MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,FormsModule,
     BrowserAnimationsModule,MatDividerModule,
     AppRoutingModule,MatDialogModule,MatSidenavModule,MaterialModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }