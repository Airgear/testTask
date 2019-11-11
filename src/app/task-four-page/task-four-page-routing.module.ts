import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskFourPageComponent } from './task-four-page.component';


const routes: Routes = [
  { path: 'taskfour', component: TaskFourPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskFourPageRoutingModule { }
