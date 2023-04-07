import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Input() taskList: any;
  newTask : string='';
  addTodo(){
    if(this.newTask=="")
    {
      alert("Input cannot be empty");
      return;
    }
    this.taskList.unshift(this.newTask);  //unshift naa push maari dhaan but array of 0 la push panum
    localStorage.setItem('myTasks',JSON.stringify(this.taskList));
    this.newTask="";
  }
}
