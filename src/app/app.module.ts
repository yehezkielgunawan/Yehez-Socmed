import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserPostComponent } from './user-post/user-post.component';
import { UserListComponent } from './user-list/user-list.component';
import { TagPostComponent } from './tag-post/tag-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserPostComponent,
    UserListComponent,
    TagPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
