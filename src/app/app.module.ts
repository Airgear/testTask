import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TaskOnePageComponent } from './task-one-page/task-one-page.component';
import { TaskTwoPageComponent } from './task-two-page/task-two-page.component';
import { TaskThreePageComponent } from './task-three-page/task-three-page.component';
import { TaskFourPageComponent } from './task-four-page/task-four-page.component';
import { RouterModule } from '@angular/router';
import { MainPageModule } from './main-page/main-page.module';
import { TaskOnePageModule } from './task-one-page/task-one-page.module';
import { TaskTwoPageModule } from './task-two-page/task-two-page.module';
import { TaskThreePageModule } from './task-three-page/task-three-page.module';
import { TaskFourPageModule } from './task-four-page/task-four-page.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TaskOnePageComponent,
    TaskTwoPageComponent,
    TaskThreePageComponent,
    TaskFourPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MainPageModule,
    TaskOnePageModule,
    TaskTwoPageModule,
    TaskThreePageModule,
    TaskFourPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
