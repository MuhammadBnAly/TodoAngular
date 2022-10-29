import { Component, OnInit } from '@angular/core';
import Todo from '../../models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  todos! : Todo[];
  total : number = 0 ;
  counter : number = 0;

  constructor(private service : TodoService) { }

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos(){
    this.service.getAllTodos().subscribe( (result : any) => {
      this.todos = result;
    });
    this.calculateProgress();
  }

  toggleTodo(event : any){
    event.completed = ! event.completed;
    this.updateTodo(event);
    this.calculateProgress();
  }

  updateTodo(event : any){
    this.service.updateTodo(event).subscribe( () => {
      this.todos = this.todos.map( item => {
        if (event.id === item.id){
          return event;
        }
        return item;
      });
    });
  }

  deleteTodo(event : any){
    this.service.deleteTodo(event).subscribe( () => {
      this.todos = this.todos.filter( item => {
        return item !== event;
      });
    });
    this.calculateProgress();
  }

createTodo(event : any){
  this.service.creatTodo(event).subscribe( (res:any) => {
    this.todos.push(res);
  });
  this.service.getAllTodos().subscribe( (getDate:any) => {
    this.todos = getDate;
  });
  this.calculateProgress();
}

calculateProgress(){
  this.counter = 0;
  this.service.getAllTodos().subscribe( (result : any) => {
    this.todos = result;
    for(let i of this.todos){
      if (i.completed == true){
        this.counter ++;
      }
    }
    this.total = result.length;
  })
}

}
