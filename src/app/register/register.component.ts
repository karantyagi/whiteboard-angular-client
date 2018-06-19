import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username = '';
  password = '';
  password2 = '';

  register(username, password, password2) {
    if (username === '') {
      alert('Enter Username !');
    } else {
      this.service.findUserByUsername(username)
        .then((user) => {
          console.log('User found : ', user);
          if (user !== null) {
            alert('This username already exists');
          } else {
            if (password === '') {
              alert('Enter Password !');
            } else {
              if (password2 === '') {
                alert('Verify Password !');
              } else if (password2 !== password) {
                alert('Passwords do not match !');
              } else {
                this.service
                  .createUser(username, password)
                  .then(() =>
                    this.router.navigate(['profile']));
              }
            }
          }
        });
    }
  }

  reset(username, password) {
    this.username = '';
    this.password = '';
    this.password2 = '';
  }

  ngOnInit() {
  }

}
