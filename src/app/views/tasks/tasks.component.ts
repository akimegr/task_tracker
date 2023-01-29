import {Component, OnInit} from '@angular/core';
import {Task} from "../../model/Task";
import {DataHandlerService} from "../../services/data-handler.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  tasks: Task[] | undefined;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.tasks = this.dataHandler.getTasks();
  }


}
