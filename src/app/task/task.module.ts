import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskPageNotfoundComponent } from './task-page-notfound/task-page-notfound.component';

@NgModule({
  declarations: [TaskComponent, ParentComponent, ChildComponent, TaskPageNotfoundComponent],
  imports: [CommonModule, TaskRoutingModule],
  exports: [ChildComponent, TaskComponent, ParentComponent],
})
export class TaskModule {}
