import { Component , OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent{
  @Input() tasks: any;
  search : string='';
  remove(index : number){
    this.tasks.splice(index , 1)
    localStorage.setItem('myTasks',JSON.stringify(this.tasks));

  }
}
