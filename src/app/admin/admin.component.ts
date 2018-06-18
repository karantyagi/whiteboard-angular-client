import { Component, OnInit } from '@angular/core';
import {Course} from '../models/course.model.client';
import {SectionServiceClient} from '../services/section.service.client';
import {CourseServiceClient} from '../services/course.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  sections = [];
  courses: Course[] = [];

  username;
  admin = false;
  loggedIn = true;
  constructor(private service: CourseServiceClient,
              private sectionService: SectionServiceClient,
              private userService: UserServiceClient,
              private router: Router) {
  }
  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  ngOnInit() {
    this.userService
      .profile()
      .then((user) => {
        console.log('logged in as : ', user);
        this.username = user.username;
        if (this.username === 'No session maintained') {
          this.loggedIn = false;
        }
        if (this.username === 'admin') {
          this.admin = true;
        }
      });

    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }



}
