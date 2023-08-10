import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
const routes: Routes = [
  { path: '', component: TodolistComponent },
  { path: 'home', component: TodolistComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
