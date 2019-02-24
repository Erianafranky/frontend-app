import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../auth-service';


@Component({
  selector: 'app-transfer-screen',
  templateUrl: './transfer-screen.component.html',
  styleUrls: ['./transfer-screen.component.css']
})
export class TransferScreenComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

  const email = form.value.email;
  const amount = form.value.amount;
  

  

  this.authService.transfer(email);
	
}


}
