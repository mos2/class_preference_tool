import { Course} from './course';

export class CourseChoice {
  preference: number;
  selected_course: string;
  options: Course[];

  constructor(preference: number, seletced_course: string, options: Course[] ) {
    this.preference = preference;
    this.selected_course = seletced_course;
    this.options = options;
  }

  public getOptions() {
    return this.options;
  }

  removeCourseOption(name: string) {
    for (let index = this.options.length - 1; index >= 0; index --) {
      if (this.options[index].name === name) {
        this.options.splice(index, 1);
      }
    }
  }

  addCourseOption(course: Course) {
    if (this.selected_course !== course.name) {
      if (! this.isOptionPresent(course.name)) {
        this.options.push(course);
      }
    }
  }

  private isOptionPresent(name: string) {
    let present = false;
    for (let index = 0; index < this.options.length; index++) {
      if (this.options[index].name === name) {
        present = true;
      }
    }
    return present;
  }
}


