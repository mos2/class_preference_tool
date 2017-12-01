import { Component } from '@angular/core';
import { CourseChoice } from './course_choice';
import { COURSES } from './courses';
import {PreferenceRecord} from './PreferenceRecord';
import {DatabaseService} from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selected_options = [];
  courses = COURSES;
  username = null;

  constructor(private databaseService: DatabaseService) {

  }

  first_choice = new CourseChoice(1, null);
  second_choice = new CourseChoice(2, null);
  third_choice = new CourseChoice(3, null);

  choices: CourseChoice[] = [this.first_choice, this.second_choice, this.third_choice];

  private onChangeSelectBox(event: any) {
    this.selected_options.push(this.getCourse(event.value));
  }

  private getCourse(name: string) {
    for (let index = 0; index < COURSES.length; index ++) {
      if (COURSES[index].name === name) {
        return COURSES[index];
      }
    }
  }

  save(): void {
    const record = new PreferenceRecord(this.username, this.first_choice.selected_course, this.second_choice.selected_course,
      this.third_choice.selected_course);
    console.log('Got to save! ' + record);
    try {
      this.databaseService.save(record);
    } catch (error) {
      console.log('Could not save record', error.message);
    }
  }
}
