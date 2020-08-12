import { Component, OnInit } from '@angular/core';
import {Todo} from "./../../model/Todo";
import {v4 as uuidv4} from "uuid";
import {TodoService} from "./../../service/todo.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoTitle: string;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  handleAdd(){
    const newTodo:Todo={
      id: uuidv4(),
      title: this.todoTitle,
      isCompleted: false,
      date:new Date(),
    };
    this.todoService.addTodo(newTodo);
    this.todoTitle="";
  }
}
