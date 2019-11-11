import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskOnePageComponent } from './task-one-page.component';


const routes: Routes = [
  { path: 'taskone', component: TaskOnePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskOnePageRoutingModule { }
