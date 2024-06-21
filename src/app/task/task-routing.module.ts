import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { TaskComponent } from './task/task.component';
import { TaskPageNotfoundComponent } from './task-page-notfound/task-page-notfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'parent',
    pathMatch: 'full',
    children:[]
  },
  {
    path: 'child',
    component: ChildComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: '**',
    component: TaskPageNotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
