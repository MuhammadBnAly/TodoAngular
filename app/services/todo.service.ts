import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Todo from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  
  
  // getAllTodos() : Observable<Todo[]>
  // {
  //   return this.http.get<Todo[]>(`https://jsonplaceholder.typicode.com/todos?_limit=5`);
  //   // return this.http.get<Todo[]>(`${this.baseUrlOld}todos`);
  // }

  getAllTodos(){
    // return this.http.get<Todo[]>(`${this.baseUrl}todos`);
    return this.http.get(`${this.baseUrl}todos`);
  }

  updateTodo(model : Todo){
    return this.http.put(`${this.baseUrl}todos/${model.id}`, model);
  }

  creatTodo(model : Todo){
    return this.http.post(`${this.baseUrl}todos`, model);
  }

  deleteTodo(model : Todo){
    return this.http.delete(`${this.baseUrl}todos/${model.id}`);
  }
  

}
