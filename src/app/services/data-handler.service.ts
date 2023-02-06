import { Injectable } from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";
import {Task} from "../model/Task";
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {CategoryDAOArray} from "../data/dao/impl/CategoryDAOArray";
import {TaskDAOArray} from "../data/dao/impl/TaskDAOArray";
import {Priority} from "../model/Priority";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  taskSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categorySubject = new BehaviorSubject<Category[]>(TestData.categories);

  private categoryDaoArray = new CategoryDAOArray();
  private taskDaoArray = new TaskDAOArray();


  constructor() { }
  // fillCategories() : Category[] {
  //   return TestData.categories;
  // }
  //
  // fillTasks() {
  //   this.taskSubject.next(TestData.tasks);
  // }

  fillTasksByCategory(category: Category) {
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.taskSubject.next(tasks);
  }



  getAllCategories():Observable<Category[]> {
    return this.categoryDaoArray.getAll();
  }
  getAllTasks():Observable<Task[]> {
    return this.taskDaoArray.getAll();
  }

  searchTodos(selectedCategory: Category, searchText:string | null, status:boolean | null, priority:Priority | null) {
    return this.taskDaoArray.search(selectedCategory,searchText,status,priority)
  }

  searchTask(task: Task) {
    return this.taskDaoArray.searchTask(task)
  }

  updateTask(task: Task) {
    return this.taskDaoArray.update(task);
  }
}
