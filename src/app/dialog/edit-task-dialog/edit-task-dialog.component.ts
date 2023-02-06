import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Task} from "../../model/Task";
import {DataHandlerService} from "../../services/data-handler.service";

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

  ngOnInit(): void {
    this.task =  this.data[0];
    this.dialogTitle = this.data[1];
    this.tmpTitle = this.task.title;
    console.log(this.task);
  }

  onConfirm() {
    this.task.title = this.tmpTitle;
    this.dialogRef.close(this.task);
  }

  onCancel() {
    this.dialogRef.close(null);
  }
}
