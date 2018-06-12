import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../services/course-navigator.service.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service:
                CourseNavigatorServiceClient) { }
  courses = [];
  modules = [];
  lessons = [];
  topics = [];
  widgets = [];
  selectedCourseId = 0;
  selectedModuleId = 0;
  selectedLessonId = 0;
  selectedTopicId = 0;
  selectedWidgetId = 0;

  selectCourse(courseId) {
    this.selectedCourseId = courseId;
    this.selectedModuleId = 0;
    this.selectedLessonId = 0;
    this.selectedTopicId = 0;
    this.selectedWidgetId = 0;
    this.modules = [];
    this.lessons = [];
    this.topics = [];
    this.widgets = [];
    this.service.findAllModulesForCourse(courseId)
      .then(modules => this.modules = modules);
  }

  selectModule(moduleId) {
    this.selectedModuleId = moduleId;
    this.selectedLessonId = 0;
    this.selectedTopicId = 0;
    this.selectedWidgetId = 0;
    this.lessons = [];
    this.topics = [];
    this.widgets = [];
    // alert('Course ID: ' + this.selectedCourseId + 'Module ID: ' + moduleId);
    this.service.findAllLessonsForModule(this.selectedCourseId, moduleId)
      .then(lessons => this.lessons = lessons);
  }

  selectLesson(lessonId) {
    this.selectedLessonId = lessonId;
    this.selectedTopicId = 0;
    this.selectedWidgetId = 0;
    this.topics = [];
    this.widgets = [];
    this.service.findAllTopicsForLesson(this.selectedCourseId, this.selectedModuleId, lessonId)
      .then(topics => this.topics = topics);
  }

  selectTopic(topicId) {
    this.selectedTopicId = topicId;
    this.selectedWidgetId = 0;
    this.widgets = [];
    this.service.findAllWidgetsForTopic(this.selectedCourseId, this.selectedModuleId, this.selectedLessonId, topicId)
      .then(widgets => this.widgets = widgets);
  }

  selectWidget(widgetId) {
    this.selectedWidgetId = widgetId;
    // alert('Widget : ' + widgetId);
  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => {
        this.courses = courses;
      });
  }

}
