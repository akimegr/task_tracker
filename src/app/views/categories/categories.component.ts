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
  selectedCategory: Category;

  constructor(private dataHandler: DataHandlerService) {

  }

  ngOnInit() {
    this.dataHandler.categorySubject.subscribe(categories => this.categories = categories);
  }

  showTaskByCategory(category: Category) {
    this.dataHandler.fillTasksByCategory(category);
    this.selectedCategory = category;
  }
}
