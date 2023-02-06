import { Task } from "src/app/model/Task";
import {TaskDAO} from "../interface/TaskDAO";
import {Observable, of} from "rxjs";
import {Category} from "../../../model/Category";
import {TestData} from "../../TestData";
import {Priority} from "../../../model/Priority";



export class TaskDAOArray implements TaskDAO {
  add(t: Task): Observable<Task> {
    // @ts-ignore
    return undefined;
  }

  delete(id: number): Observable<Task> {
    // @ts-ignore
    return undefined;
  }

  get(id: number): Observable<Task> {
    // @ts-ignore
    return undefined;
  }

  getAll(): Observable<Task[]> {
    return of(TestData.tasks);
  }

  getCompletedCountInCategory(category: Category): Observable<number> {
    // @ts-ignore
    return undefined;
  }

  getTotalCount(): Observable<number> {
    // @ts-ignore
    return undefined;
  }

  getTotalCountInCategory(category: Category): Observable<number> {
    // @ts-ignore
    return undefined;
  }

  getUncompletedCountInCategory(category: Category): Observable<number> {
    // @ts-ignore
    return undefined;
  }

  search(category: Category, searchText: string | null, status: boolean | null, priority: Priority | null): Observable<Task[]> {
    // @ts-ignore
    return of(this.searchTodos(category,searchText,status,priority))
  }

  private searchTodos(category:Category, searchText: string, status:boolean, priority:Priority):Task[]{
    let allTasks = TestData.tasks;

    if(category!=null) {
      allTasks = allTasks.filter(todo => todo.category===category);
    }
    return allTasks;
  }

  update(task: Task): Observable<Task> {
    const taskTmp = TestData.tasks.find(t=>t.id===task.id);
    // @ts-ignore
    TestData.tasks.splice(TestData.tasks.indexOf(taskTmp),1,task);
    return of(task)
  }

  searchTask(selTask:Task) : Observable<Task[]> {
    let allTasks = TestData.tasks;
    if(selTask && selTask.id != null){
      allTasks = allTasks.filter(task=> task.id===selTask.id)
    }
    return of(allTasks);
  }
}
