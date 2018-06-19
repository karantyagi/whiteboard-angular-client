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
  selectedCourseId;
  addMode = false;
  updateMode = false;
  updateId = 0;
  sectionName = '';
  seats = '';

  username;
  admin = false;
  loggedIn = true;
  constructor(private service: CourseServiceClient,
              private sectionService: SectionServiceClient,
              private userService: UserServiceClient,
              private router: Router) {
  }
  loadSections() {
    this
      .sectionService
      .findSectionsForCourse(this.selectedCourseId)
      .then(sections => this.sections = sections);
  }
  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }
  addSection() {
    this.addMode = true;
  }

  cancel() {
    this.addMode = false;
  }

  cancelUpdateMode() {
    this.updateMode = false;
  }
  editSection(section) {
    this.updateMode = true;
    this.sectionName = section.name;
    this.seats = section.seats;
    this.updateId = section._id;
  }

  deleteSection(section) {
    // alert('delete section : ' + section._id);
    this
      .sectionService
      .deleteSection(section._id)
      .then(() => {
        this.loadSections();
      });
  }

  createSection(sectionName, seats) {
    // console.log(sectionName, ' ', seats);
    if (this.sectionName === '') {
      alert('Enter Section Name');
    } else {
      if (this.seats === '') {
        alert('Enter Maximum seats');
      } else {
        this
          .sectionService
          .createSection(this.selectedCourseId, sectionName, seats)
          .then(() => {
            // this.loadSections(this.courseId);
            this.sectionService
              .findSectionsForCourse(this.selectedCourseId)
              .then(sections => {
                this.sections = sections;
                this.sectionName = '';
                this.seats = '';
                this.addMode = false;
              });
          });
      }
    }
  }

  selectCourse(id) {
    this.selectedCourseId = id;
    this.sectionService
      .findSectionsForCourse(this.selectedCourseId)
      .then(sections => this.sections = sections);
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
      .then(courses => {
        this.courses = courses;
        this.selectedCourseId = this.courses[0].id;
        this.sectionService
          .findSectionsForCourse(this.selectedCourseId)
          .then(sections => this.sections = sections);
      });
  }
}
