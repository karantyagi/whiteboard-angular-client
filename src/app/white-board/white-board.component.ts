import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  username;
  password;

  constructor(private service: UserServiceClient) {
  }

  ngOnInit() {
    this.service
      .profile()
      .then((user) => {
          console.log('logged in as : ', user);
          this.username = user.username;
        }
      );
  }

}
