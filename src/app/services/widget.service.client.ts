export class WidgetServiceClient {
  findWidgetsForLesson(topicId) {
    return fetch('https://kt-course-manager-server.herokuapp.com/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
