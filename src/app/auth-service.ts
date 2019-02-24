import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
@Injectable()


export class AuthService {
	

	signUp(email: string, password: string) {


		firebase.auth().createUserWithEmailAndPassword(email, password).catch(

			error => console.log(error)


		);

	}

	login(email: string, password: string) {




		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(

				reponse => console.log('Success Login')

			).catch(

		);
	}

	transfer(email: string) {




		firebase.auth().fetchSignInMethodsForEmail(email)
			.then(

				reponse => console.log('Sent Successfully')

			).catch(

		);
	}

}