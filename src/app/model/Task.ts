import {Priority} from "./Priority";
import {Category} from "./Category";

export class Task {
  id: number;
  title: string;
  priority?: Priority;
  category?: Category;
  date?: Date;
  completed: boolean;
  color?: string;

  constructor(id: number,  title: string, completed: boolean, priority?: Priority, category?: Category, date?: Date) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.category = category;
    this.date = date;
    this.completed = completed;
  }
}
