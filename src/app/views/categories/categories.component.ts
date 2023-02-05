import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataHandlerService} from "../../services/data-handler.service";
import {Category} from "../../model/Category";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input()
   categories: Category[] | undefined;
  @Output()
  selectCategory = new EventEmitter<Category>();
   selectedCategory: Category;

  constructor(private dataHandler: DataHandlerService) {

  }

  ngOnInit() {
    // this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
  }

  showTaskByCategory(category: Category) {
    // this.dataHandler.fillTasksByCategory(category);
    // this.selectedCategory = category;

    if(this.selectedCategory===category) {
      return;
    }
    this.selectedCategory = category;
    this.selectCategory.emit(this.selectedCategory);
  }
}
