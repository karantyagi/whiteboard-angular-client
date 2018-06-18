import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';

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

  username = '';
  firstName = '';
  lastName = '';
  email = '';
  address = '';
  phone = '';
  user = {};
  admin = false;
  loggedIn = true;
  password;
  sections = [];
  courseIds = [];
  courseList: Course[] = [];
  updateId;

  update() {
    // console.log('Username : ', this.username);
    // console.log('First name : ', this.firstName);
    // console.log('Last name : ', this.lastName);
    // console.log('email : ', this.email);
    // console.log('address : ', this.address);
    this.user = {
      'username' : this.username,
      'firstName' : this.firstName,
      'lastName' : this.lastName,
      'email' : this.email,
      'address' : this.address,
      'phone' : this.phone
    };
    // console.log('User : ', this.user);
    // console.log('ID : ', this.updateId);
       this
      .service
      .updateUser(this.updateId, this.user)
      .then(() => {
        alert('Profile updated !');
      });
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  getCourseName(courseId) {
    // console.log('course ID :' , courseId);
    // console.log(this.courseList);
    for (let i = 0; i < this.courseList.length; i++) {
      if (courseId === this.courseList[i].id) {
        return (this.courseList[i].title);
      }
    }
    return ('');
  }

  dropSection(section) {
      alert('You will be un-enrolled from this course section.');
  }


  ngOnInit() {
    this.service
      .profile()
      .then(userProfile => {
        this.service.findUserById(userProfile._id)
          .then((user) => {
            console.log('user from DB : ', user);
            this.updateId = user._id;
              this.username = user.username;
              this.phone = user.phone;
              this.email = user.email;
              this.address = user.address;
              this.firstName = user.firstName;
              this.lastName = user.lastName;
              if (this.username !== 'admin' && this.username !== 'No session maintained') {
                this.sectionService
                  .findSectionsForStudent()
                  .then(sections => {
                    this.sections = sections;
                    for (let i = 0; i < this.sections.length; i++) {
                      this.courseIds.push({
                        'section': this.sections[i].section.name,
                        'course': this.sections[i].section.courseId
                      });
                    }
                    for (let i = 0; i < this.courseIds.length; i++) {
                      (this.courseService.findCourseById(this.courseIds[i].course)
                        .then((course) => {
                          this.courseList.push(course);
                        }));
                    }
                  });
              }
              if (this.username === 'No session maintained') {
                this.loggedIn = false;
                this.router.navigate(['login']);
              }
              if (this.username === 'admin') {
                this.admin = true;
              }
          });

        }
      );
  }
}
