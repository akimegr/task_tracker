import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Task} from "../../model/Task";
import {DataHandlerService} from "../../services/data-handler.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import { MatDialog } from '@angular/material/dialog';
import {EditTaskDialogComponent} from "../../dialog/edit-task-dialog/edit-task-dialog.component";



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['color','position', 'name', 'priority', 'category', 'date','done'];
  dataSource : MatTableDataSource<Task>;
  clickedRows = new Set<Task>();

  @ViewChild(MatPaginator, {static: false}) private  paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) private  sort: MatSort;

  tasks: Task[];

  @Output()
  updatedTask = new EventEmitter<Task>();

  @Input("tasks")
   set setTasks(tasks: Task[]) {
    this.tasks = tasks;
    this.fillTable();
  }



  constructor(private dataHandler: DataHandlerService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    // this.dataHandler.taskSubject.subscribe(tasks => this.tasks=tasks);
    this.dataSource =  new MatTableDataSource();
    this.fillTable();
  }


  //уже всё проиниц
  ngAfterViewInit(): void {
    this.addTableObjects();
  }

  private fillTable() {

    if(!this.dataSource) {
      return;
    }

    this.dataSource.data = this.tasks;  //обновить источник даты
    this.addTableObjects();

    // @ts-ignore
    this.dataSource.sortingDataAccessor = (task, colName) => {
      switch (colName) {
        case 'position': {
          return task.id;
        }
        case 'name': {
          return task.title;
        }
        case 'priority': {
          return task.priority ? task.priority.id : null;
        }
        case 'category': {
          return task.category ? task.category.id : null;
        }
        case 'date': {
          return task.date ? task.date : null;
        }
        case 'done': {
          return task.completed;
        }
      }
    }
  }

  getTaskColor(task:Task): string {
    return task.color==null ? "#F8F9FA" : task.color;
  }

  taskComplete(task: Task) {
    task.completed = !task.completed
  }

  private addTableObjects() {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onClickTaskEdit(task: Task) {
    const dialogRef = this.dialog.open(EditTaskDialogComponent, {data:
    [task, 'Редактирование задачи'], autoFocus:false});
    dialogRef.afterClosed().subscribe(result=>{
      if (result as Task) {
        this.updatedTask.emit(task);
        return;
      }
    })

    // this.updatedTask.emit(task)
  }
}



