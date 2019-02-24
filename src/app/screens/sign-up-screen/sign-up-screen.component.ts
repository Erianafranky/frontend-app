import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../auth-service';
import {Router, Routes, RouterModule} from '@angular/router';


@Component({
  selector: 'app-sign-up-screen',
  templateUrl: './sign-up-screen.component.html',
  styleUrls: ['./sign-up-screen.component.css']
})
export class SignUpScreenComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
       this.router.navigate(['signup'])

  }


  ngOnInit() {
  }

  onSubmit(form: NgForm) {

	const name = form.value.name;
  const email = form.value.email;
  const number = form.value.number;
  const password =form.value.password;

  

  this.authService.signUp(email, password);
	
}

}


