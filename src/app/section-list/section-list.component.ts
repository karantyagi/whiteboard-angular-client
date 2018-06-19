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
  userId;
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

  enroll(section) {
    if (this.loggedIn === true) {
      // console.log('validating enrollment');
      // console.log(this.userId, section._id);
      // alert(section._id + 'check if student is already enrolled in this section');
      this.service.findEnrollmentByCredentials(this.userId, section._id)
        .then((enrollment) => {
          // console.log('returned value -need null here !');
          // console.log('check : ', enrollment);
          console.log('Available Seats (in this section): ', section.seats);
          if ( section.seats === 0) {
            alert('Cannot Enroll. Seats Full !!');
          } else {
            if (enrollment != null) {
              alert('You are already enrolled in this course !');
            } else {
              this.service
                .enrollStudentInSection(section._id)
                .then(() => {
                  this.router.navigate(['profile']);
                });
            }
          }
        });
    } else {
      alert('Login to enroll in a course section.');
    }
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
          this.userId = user._id;
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
