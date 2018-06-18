import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient,
              private router: Router) {
  }

  user = {};
  username;
  password;
  sections = [];
  course = {};
  courseId;

  update(user) {
    console.log(user);
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  courseDetails(courseId) {
    this.courseId = courseId;
    return this.courseId;
    // this.courseService
    //   .findCourseById(courseId)
    //   .then(course => {
    //     this.course = course;
    //   });
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user =>
        this.username = user.username);

    this.sectionService
      .findSectionsForStudent()
      .then(sections => {
        this.sections = sections;

      });
  }
}
