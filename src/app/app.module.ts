import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { SignUpScreenComponent } from './screens/sign-up-screen/sign-up-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth-service';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import {TransferScreenComponent} from './screens/transfer-screen/transfer-screen.component';



@NgModule({
  declarations: [
    AppComponent,
    SignUpScreenComponent,
    LoginScreenComponent,
    HomeScreenComponent,
    TransferScreenComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }