export class TopicServiceClient {
  findTopicsForLesson(courseId, moduleId, lessonId) {
    return fetch('https://kt-course-manager-server.herokuapp.com/api/course/' + courseId +
      '/module/' + moduleId + '/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }
}
