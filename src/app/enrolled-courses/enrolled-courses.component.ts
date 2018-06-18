import {Component, OnInit} from '@angular/core';
import {Course} from '../models/course.model.client';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.css']
})
export class EnrolledCoursesComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private sectionService: SectionServiceClient) {
  }

  // courses: Course[] = [];
  sections = [];
  courseIds = [];
  courseList: Course[] = [];

  getSection(courseId) {
    for (let i = 0; i < this.sections.length; i++) {
     if (courseId === this.sections[0].section.courseId) {
       return (this.sections[0].section.name);
     }
    }
    return ('');
    console.log('course ids: ', this.courseIds[0].course);
  }

  ngOnInit() {
    // this.service.findAllCourses()
    //   .then(courses => this.courses = courses);

    this.sectionService
      .findSectionsForStudent()
      .then(sections => {
        this.sections = sections;
        for (let i = 0; i < this.sections.length; i++) {
          this.courseIds.push({
            'section' : this.sections[0].section.name,
            'course' : this.sections[0].section.courseId});
        }
        console.log('course ids: ', this.courseIds[0].course);

        for (let i = 0; i < this.courseIds.length; i++) {
          (this.service.findCourseById(this.courseIds[i].course)
            .then((course) => {
              this.courseList.push(course);
            }));
        }
      });
  }
}
