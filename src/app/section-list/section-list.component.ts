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
