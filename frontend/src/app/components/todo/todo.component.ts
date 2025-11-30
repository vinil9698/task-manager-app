import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{

  title: string = '';
  todos: any = [];

  constructor(private todoService: TodoService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  async loadTodos() {
    this.todos = [];
    this.todos = await this.todoService.getTodos();
  }

  async addTodo() {
    if (this.title.trim()) {
      const result: any = await this.todoService.createTodo({ title: this.title.trim(), isCompleted: false });
      if (result.success) {
        this.toastr.success(`${result.success}`);
        this.title = '';
        await this.loadTodos();
      } else {
        this.toastr.error(`${result.error}`);
      }
    }
  }
  
  async toggleCompletion(todo: any) {
    const result: any = await this.todoService.updateTodo(todo.id, { isCompleted: !todo.isCompleted });
    if (result.success) {
      this.toastr.success(`${result.success}`);
      await this.loadTodos();
    } else {
      this.toastr.error(`${result.error}`);
    }
  }

  async deleteTodo(id: number) { 
    const result: any = await this.todoService.deleteTodo(id);
     if (result.success) {
        this.toastr.success(`${result.success}`);
        await this.loadTodos();
      } else {
        this.toastr.error(`${result.error}`);
      }
  }
}
