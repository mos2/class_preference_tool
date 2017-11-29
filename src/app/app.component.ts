import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  choice_one: string;
  choice_two: string;
  choice_three: string;

  choices = [
    {viewName: "Advanced Python", name: "a_python" },
    {viewName: "Hardware", name: "hardware"},
    {viewName: "Arduino", name: "arduino"},
    {viewName: "Computer Science Fundamentals", name: "cs_fundamentals"}
  ];

  selected = [];


  private onChangeSelectBox(event:any){
    console.log("Got here")
    let value = event
    console.log(event.value)
    if(this.selected.indexOf(value) == -1){
      this.selected.push(value);
    }
  }

  private showOption(value:any):boolean{
    return this.selected.indexOf(value) == -1;
  }
}
