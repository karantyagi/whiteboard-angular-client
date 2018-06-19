import {Component, OnInit} from '@angular/core';
import {Course} from '../models/course.model.client';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.css']
})
export class EnrolledCoursesComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private sectionService: SectionServiceClient,
              private userService: UserServiceClient) {
  }

  // courses: Course[] = [];
  sections = [];
  courseIds = [];
  courseList: Course[] = [];

  username;
  admin = false;
  loggedIn = true;

  unique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  getSection(courseId) {
    for (let i = 0; i < this.sections.length; i++) {
     if (courseId === this.sections[i].section.courseId) {
       return (this.sections[i].section.name);
     }
    }
    return ('');
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

          if (this.loggedIn) {
            this.sectionService
              .findSectionsForStudent()
              .then(sections => {
                this.sections = sections;
                for (let i = 0; i < this.sections.length; i++) {
                  this.courseIds.push(this.sections[i].section.courseId
                  //   {
                  //   'section': this.sections[i].section.name,
                  //   'course': this.sections[i].section.courseId
                  // }
                  );
                }
                this.courseIds = this.courseIds.filter(this.unique);
                console.log('course ids: ', this.courseIds);

                for (let i = 0; i < this.courseIds.length; i++) {
                  (this.service.findCourseById(this.courseIds[i])
                    .then((course) => {
                        this.courseList.push(course);
                    }));
                }
              });
          }
          }
        );

  }
}
