import { Component } from '@angular/core';

interface TodoItem {
  todo: string;
  completed: boolean;
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  title = 'CodeSandbox';
  x!: any;
  // todoValue: string = ''; // Initialize with an empty string
  // todoArray: string[] = []; // Explicitly define the type of todoArray as an array of strings
  todo!: string;
  completed: boolean[] = [];
  todoArray: TodoItem[] = [];
  todoValue: string = '';

  addTodo() {
    if (this.todoValue.trim() !== '') {
      this.todoArray.push({
        todo: this.todoValue,
        completed: false, // Set the initial completion status as false
      });
      this.todoValue = '';
      console.log(this.todoArray);
    }
  }

  deleteItem(todo: TodoItem) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
        console.log('deleted value: ', todo);
      }
    }
  }

  todoSubmit(value: any) {
    if (value !== '') {
      this.todoArray.push(value.todo); //this.todoForm.reset()
    } else {
      alert('Field required **');
    }
  }
  onTaskCompleted(todo: TodoItem) {
    // Toggle the completed status of the task
    todo.completed = !todo.completed;
  }
}
