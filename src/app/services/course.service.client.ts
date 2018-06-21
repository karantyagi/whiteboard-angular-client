export class CourseServiceClient {
  COURSE_URL = 'https://kt-course-manager-server.herokuapp.com/api/course';
  findAllCourses() {
    return fetch(this.COURSE_URL,
      {
        mode: 'no-cors'
      })
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId,
      {
        mode: 'no-cors'
      })
      .then(response => response.json());
  }
}
