import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthorComponent } from './components/author/author.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';


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
    path: 'dapp',
    component: ProfileComponent
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
