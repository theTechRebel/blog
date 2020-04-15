import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecentComponent } from './components/recent/recent.component';
import { AuthorComponent } from './components/author/author.component';
import { PostComponent } from './components/post/post.component';
import { RelatedComponent } from './components/related/related.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { LineItemComponent } from './components/line-item/line-item.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedComponent,
    HomeComponent,
    FooterComponent,
    RecentComponent,
    AuthorComponent,
    PostComponent,
    RelatedComponent,
    ShowcaseComponent,
    LineItemComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
