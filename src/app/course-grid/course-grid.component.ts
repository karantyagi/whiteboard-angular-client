import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private userService: UserServiceClient) { }

  courses: Course[] = [];
  admin = false;
  username = '';

  ngOnInit() {

    this.userService
      .profile()
      .then(user => {
        this.username = user.username;
        if (this.username === 'admin') {
          this.admin = true;
        }
        this.service.findAllCourses()
          .then(courses => this.courses = courses);
      });
  }

}
