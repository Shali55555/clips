import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AngularFireAuth) { }

  inSubmission = false

  credentials = {
    email: '',
    password:''
  }

  ngOnInit(): void {
  }

  showAlert = false
  alertMsg = 'Checking Credentials'
  alertColour = 'blue'

  async login() {
    this.showAlert = true
    this.alertMsg = 'Checking Credentials'
    this.alertColour = 'blue'
    this.inSubmission = true

    try {

      await this.auth.signInWithEmailAndPassword(
        this.credentials.email, this.credentials.password
      )

    } catch (e) {
      console.error(e)

      this.alertMsg = 'An unexpected error occured. Please try again later!'
      this.alertColour = 'red'
      this.inSubmission = false
      return
    }
    this.alertMsg = 'Login Successful!'
    this.alertColour = 'green'
  }
  
}
