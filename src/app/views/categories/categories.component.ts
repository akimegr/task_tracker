import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../services/data-handler.service";
import {Category} from "../../model/Category";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] | undefined;

  constructor(private dataHandler: DataHandlerService) {

  }

  ngOnInit() {
    this.categories = this.dataHandler.getCategories();
    console.log(this.categories);
  }
}
