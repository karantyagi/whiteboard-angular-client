import { Component, OnInit } from '@angular/core';
import {Course} from '../models/course.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private userService: UserServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => this.loadCourse(params['courseId']));
  }
  username;
  password;
  admin = false;
  loggedIn = false;

  course: Course = new Course();
  loadCourse(courseId) {
    // console.log(courseId);
    this.service.findCourseById(courseId)
      .then(course => {
        this.course = course;
        console.log('Course : ', this.course);
      });
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
