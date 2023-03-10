import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Task} from "../../model/Task";
import {DataHandlerService} from "../../services/data-handler.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.css']
})
export class EditTaskDialogComponent implements OnInit{

  constructor(private dialogRef: MatDialogRef<EditTaskDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: [Task, string],
              private dataHandler: DataHandlerService,
              private dialog: MatDialog) {
  }

   dialogTitle: string;
  private task: Task;
  tmpTitle: string;
  categories: Category[];
  tmpCategory: Category | undefined;

  ngOnInit(): void {
    this.task =  this.data[0];
    this.dialogTitle = this.data[1];
    this.tmpTitle = this.task.title;
    this.tmpCategory = this.task.category;
    this.dataHandler.getAllCategories().subscribe(items => this.categories = items);
  }

  onConfirm() {
    this.task.title = this.tmpTitle;
    this.task.category = this.tmpCategory;
    this.dialogRef.close(this.task);
  }

  onCancel() {
    this.dialogRef.close(null);
  }
}
