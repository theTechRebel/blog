import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './compnents/home/home.component';
import { AuthorComponent } from './compnents/author/author.component';
import { PostComponent } from './compnents/post/post.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'author',
    component: AuthorComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
