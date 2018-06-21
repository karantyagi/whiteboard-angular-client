export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch('https://kt-course-manager-server.herokuapp.com/api/course')
      .then(response => response.json());
  }
  findAllModulesForCourse(courseId) {
    return fetch('https://kt-course-manager-server.herokuapp.com/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
  findAllLessonsForModule(courseId, moduleId) {
    return fetch('https://kt-course-manager-server.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
  findAllTopicsForLesson(courseId, moduleId, lessonId) {
    return fetch('https://kt-course-manager-server.herokuapp.com/api/course/' + courseId + '/module/' + moduleId +
      '/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }
  findAllWidgetsForTopic(courseId, moduleId, lessonId, topicId) {
    return fetch('https://kt-course-manager-server.herokuapp.com/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
