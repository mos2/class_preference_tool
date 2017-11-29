import { Component } from '@angular/core';
import { CourseChoice } from './course_choice';
import { COURSES } from './courses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selected_options = [];

  first_choice = new CourseChoice(1, null, COURSES.slice());
  second_choice = new CourseChoice(2, null, COURSES.slice());
  third_choice = new CourseChoice(3, null, COURSES.slice());

  choices: CourseChoice[] = [this.first_choice, this.second_choice, this.third_choice];

  private onChangeSelectBox(event: any) {
    this.selected_options.push(this.getCourse(event.value));

    for (let index = 0; index < this.choices.length; index++) {
      if (event.value !== this.choices[index].selected_course) {
        this.choices[index].removeCourseOption(event.value);
      }
    }
    for (let selectedIndex = this.selected_options.length - 1; selectedIndex >= 0; selectedIndex--) {
      let valid = this.isSelectionValid(this.selected_options[selectedIndex].name);
      if (! valid) {
        this.selected_options.slice(selectedIndex, 1);
      }
    }
  }

  private getCourse(name: string) {
    for (let index = 0; index < COURSES.length; index ++) {
      if (COURSES[index].name === name) {
        return COURSES[index];
      }
    }
  }

  private isSelectionValid(name: string) {
    let valid = false;
    for (let index = 0; index < this.choices.length; index++) {
      if (this.choices[index].selected_course === name) {
        valid = true;
      }
    }
    if (! valid) {
      for (let index = 0; index < this.choices.length; index++) {
        this.choices[index].addCourseOption(this.getCourse(name));
        }
      }
    return valid;
  }
}
