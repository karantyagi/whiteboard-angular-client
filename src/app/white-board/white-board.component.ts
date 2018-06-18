import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  username;
  password;
  admin = false;
  loggedIn = false;

  constructor(private service: UserServiceClient,
              private router: Router) {
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  ngOnInit() {
    this.service
      .profile()
      .then((user) => {
          console.log('logged in as : ', user);
          this.username = user.username;
          if (this.username !== 'No session maintained') {
            this.loggedIn = true;
          }
          if (this.username === 'admin') {
            this.admin = true;
          }
        }
      );
  }

}
