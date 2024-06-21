import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskModule } from './task/task.module';
import { AppRoutingModule } from './app-routing.module';
import { SampatComponent } from './sampat/sampat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, SampatComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, TaskModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
