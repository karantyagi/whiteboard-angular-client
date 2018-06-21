export class LessonServiceClient {
  findLessonsForModule(courseId, moduleId) {
    return fetch('https://kt-course-manager-server.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
