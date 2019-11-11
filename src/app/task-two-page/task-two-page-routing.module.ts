import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskTwoPageComponent } from './task-two-page.component';


const routes: Routes = [
  { path: 'tasktwo', component: TaskTwoPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskTwoPageRoutingModule { }
