export class SectionServiceClient {

  SECTION_URL = 'http://localhost:4000/api/course/COURSEID/section';

  findSectionsForStudent() {
    const url = 'http://localhost:4000/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    console.log('Client works fine');
    const url = 'http://localhost:4000/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  unEnrollStudentFromSection(enrollmentId) {
    console.log('EnrollmentID : ', enrollmentId);
    return fetch('http://localhost:4000/api/enrollment/' + enrollmentId, {
      method: 'delete',
      credentials: 'include'
    });
  }

  findEnrollmentByCredentials(studentId, sectionId) {
    console.log('student : ', studentId, ' | section : ', sectionId);
    return fetch('http://localhost:4000/api/student/' + studentId + '/section/' + sectionId)
      .then(response => response.json());
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection(sectionId) {
    return fetch('http://localhost:4000/api/section/' + sectionId, {
      method: 'delete',
      credentials: 'include',
    });
  }

  updateSection(sectionId, name, seats) {
    const section = {name, seats};
    console.log('section body at client service: ', section);
    return fetch('http://localhost:4000/api/section/' + sectionId, {
      method: 'put',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
