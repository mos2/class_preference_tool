export class PreferenceRecord {
  name: string;
  first_choice: string;
  second_choice: string;
  third_choice: string;

  constructor(name: string, first_choice: string, second_choice: string, third_choice: string) {
    this.name = name;
    this.first_choice = first_choice;
    this.second_choice = second_choice;
    this.third_choice = third_choice;
  }
}
