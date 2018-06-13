import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {FormsModule} from '@angular/forms';
import {CourseNavigatorServiceClient} from './services/course-navigator.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { WhiteBoardComponent } from './white-board/white-board.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CourseNavigatorComponent,
    WhiteBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CourseNavigatorServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
