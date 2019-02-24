import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import {SignUpScreenComponent} from './screens/sign-up-screen/sign-up-screen.component';
import {LoginScreenComponent} from './screens/login-screen/login-screen.component';
import {TransferScreenComponent} from './screens/transfer-screen/transfer-screen.component';


const appRoutes: Routes = [
	{path: '' , component : 
	HomeScreenComponent},
	{path: 'signup' , component : SignUpScreenComponent},
	{path: 'login' , component : LoginScreenComponent},
	{path: 'transfer' , component : TransferScreenComponent}
];
	

@NgModule({	
	imports: [

		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})


export class AppRoutingModule { }