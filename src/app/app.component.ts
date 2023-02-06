import {Component, OnInit} from '@angular/core';
import {Task} from "./model/Task";
import {DataHandlerService} from "./services/data-handler.service";
import {Category} from "./model/Category";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tracker';
  tasks: Task[];
  selectedTask: Task;
  categories:Category[];

  selectedCategory: Category;

  constructor(private dataHandler: DataHandlerService) {

  }

  ngOnInit(): void {
    this.dataHandler.getAllTasks().subscribe(tasks => this.tasks=tasks)
    this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
  }

  onSelectCategory(category: Category) {
    this.selectedCategory = category;
    this.dataHandler.searchTodos(
      this.selectedCategory,
      "",
      null,
      null
    ).subscribe((tasks:Task[])=> {
      this.tasks = tasks;
    })
  }


  onUpdateTask(task: Task) {
    console.log(task);
    this.dataHandler.updateTask(task).subscribe(()=>{
      this.dataHandler.searchTask(
        this.selectedTask
      )
    })
  }
}
