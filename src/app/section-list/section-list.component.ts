import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private userService: UserServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }

  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];
  username;
  admin = false;
  loggedIn = true;
  updateMode = false;
  updateId = 0;

  loadSections(courseId) {
    this.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  createSection(sectionName, seats) {
    // console.log(sectionName, ' ', seats);
    this
      .service
      .createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
        this.sectionName = '';
          this.seats = '';
      });
  }

  enroll(section) {
    if (this.loggedIn === true) {
      console.log('section on client', section);
      this.service
        .enrollStudentInSection(section._id)
        .then(() => {
          this.router.navigate(['profile']);
        });
    } else {
      alert('Login to enroll in a course section.');
    }
  }

  editSection(section) {
    this.updateMode = true;
    this.sectionName = section.name;
    this.seats = section.seats;
    this.updateId = section._id;
  }

  updateSection() {
    this
      .service
      .updateSection(this.updateId, this.sectionName, this.seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
    alert('Section updated');
    this.updateMode = false;
    this.sectionName = '';
    this.seats = '';
  }

  deleteSection(section) {
    // alert('delete section : ' + section._id);
    this
      .service
      .deleteSection(section._id)
      .then(() => {
        this.loadSections(this.courseId);
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
          if (this.username === 'No session maintained') {
            this.loggedIn = false;
          }
          if (this.username === 'admin') {
            this.admin = true;
          }
        }
      );
  }

}
