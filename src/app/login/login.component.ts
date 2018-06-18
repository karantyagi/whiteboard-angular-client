import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = '';
  password = '';
  user = {};

  constructor(private router: Router,
              private service: UserServiceClient) {
  }

  reset(username, password) {
    this.username = '';
    this.password = '';
  }

  login(username, password) {
    if (username === '') {

      alert('Enter username');
    } else {
      if (password === '') {
        alert('Enter password');
      } else {
        this.service
          .login(username, password)
          .then((user) => {
              console.log('user found : ', user);
              if (user === null) {
                alert('Invalid username or password.\nPlease try again !');
              } else {
                if (this.password === user.password) {
                  this.router.navigate(['profile']);
                }
              }
            }
          );
      }
    }
  }

  ngOnInit() {
  }

}
