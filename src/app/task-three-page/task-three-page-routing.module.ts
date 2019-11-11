import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskThreePageComponent } from './task-three-page.component';


const routes: Routes = [
  { path: 'taskthree', component: TaskThreePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskThreePageRoutingModule { }
