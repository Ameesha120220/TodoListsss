import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { CalenderComponent } from './calender/calender.component';

const routes: Routes = [
  { path: '', component: TodolistComponent },
  { path: 'home', component: TodolistComponent },
  { path: 'calender', component: CalenderComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
