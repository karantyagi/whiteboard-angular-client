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
  selectedCourseTitle;
  addMode = false;
  updateMode = false;
  updateId = 0;
  sectionName = '';
  maxSeats = '';
  seats = '';
  currentMaxSeats;
  currentSeats;
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
    this.sectionName = this.selectedCourseTitle + ' Section 1';
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
    this.maxSeats = section.maxSeats;
    this.currentSeats = section.seats;
    this.currentMaxSeats = section.maxSeats;
    this.updateId = section._id;
  }

  deleteSection(section) {
    // alert('delete section : ' + section._id);
    this
      .sectionService
      .deleteSection(section._id)
      .then(() => {
        this.sectionService
          .unEnrollAllStudentsFromSection(section._id)
          .then(() => {
            this.loadSections();
          });
      });
  }

  updateSection() {
    if (this.maxSeats.valueOf() > this.currentMaxSeats.valueOf()) {
      this.seats = (Number(this.currentSeats) + (Number(this.maxSeats) - Number(this.currentMaxSeats))).toString();
      console.log('New maxSeats : ', this.maxSeats, ' | New Available seats (??): ', this.seats);
      console.log('Current maxSeats : ', this.currentMaxSeats, ' | Current Available seats : ', this.currentSeats);
      this
        .sectionService
        .updateSection(this.updateId, this.sectionName, this.maxSeats, this.seats)
        .then(() => {
          this.loadSections();
        });
      alert('Section updated');
      this.updateMode = false;
      this.sectionName = '';
      this.maxSeats = '';
    } else {
      this.seats = (Number(this.currentSeats) - (Number(this.currentMaxSeats) - Number(this.maxSeats))).toString();
      console.log('New maxSeats : ', this.maxSeats, ' | New Available seats (??): ', this.seats);
      console.log('Current maxSeats : ', this.currentMaxSeats, ' | Current Available seats : ', this.currentSeats);
      if ( this.seats.valueOf() < '0'.valueOf()) {
        alert('You cannot decrease seats to ' + this.maxSeats + ' \n' +
          '(as ' + (this.currentMaxSeats - this.currentSeats) + ' students are already enrolled.)');
      } else {
        this
          .sectionService
          .updateSection(this.updateId, this.sectionName, this.maxSeats, this.seats)
          .then(() => {
            this.loadSections();
          });
        alert('Section updated');
        this.updateMode = false;
        this.sectionName = '';
        this.maxSeats = '';
      }
    }
  }

  createSection(sectionName, maxSeats) {
    // console.log(sectionName, ' ', seats);
    if (this.sectionName === '') {
      alert('Enter Section Name');
    } else {
      if (this.maxSeats === '') {
        alert('Enter Number of Maximum seats');
      } else {
        this
          .sectionService
          .createSection(this.selectedCourseId, sectionName, maxSeats, maxSeats)
          .then(() => {
            // this.loadSections(this.courseId);
            this.sectionService
              .findSectionsForCourse(this.selectedCourseId)
              .then(sections => {
                this.sections = sections;
                this.sectionName = '';
                this.maxSeats = '';
                this.addMode = false;
              });
          });
      }
    }
  }

  selectCourse(id, title) {
    this.selectedCourseId = id;
    this.selectedCourseTitle = title;
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
        this.selectedCourseTitle = this.courses[0].title;
        this.sectionService
          .findSectionsForCourse(this.selectedCourseId)
          .then(sections => this.sections = sections);
      });
  }
}
