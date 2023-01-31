import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";


export class TestData {
  static categories: Category[] = [
    {id:1, title:'Work'},
    {id:2, title:'Family'},
    {id:3, title:'Study'},
    {id:4, title:'Relax'},
    {id:5, title:'Sport'},
    {id:6, title:'Eat'}
  ]

  static priority: Priority[] = [
    {id:1, title: 'Low', color: '#e5e5e5'},
    {id:1, title: 'Middle', color: '#85D1b2'},
    {id:1, title: 'Hight', color: '#F1822D'},
    {id:1, title: 'Very hight', color: '#F1128D'}
  ]

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залить бензин',
      priority: TestData.priority[2],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2019-04-10')
    },
    {
      id: 2,
      title: 'Залить бензин2',
      priority: TestData.priority[1],
      completed: true,
      category: TestData.categories[4],
      date: new Date('2019-04-10')
    },
    {
      id: 3,
      title: 'Залить бензин3',
      priority: TestData.priority[3],
      completed: false,
      category: TestData.categories[3],
      date: new Date('2019-04-10')
    },
    {
      id: 4,
      title: 'Залить бензин4',
      completed: false,
      date: new Date('2019-04-10')
    }
  ]
}
