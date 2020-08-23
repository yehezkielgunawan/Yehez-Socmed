import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserPostComponent} from './user-post/user-post.component';
import {UserListComponent} from './user-list/user-list.component';
import {TagPostComponent} from './tag-post/tag-post.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'user/:id', component: UserPostComponent},
  {path: 'userlist', component: UserListComponent},
  {path: 'tagpost/:tagid', component: TagPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
