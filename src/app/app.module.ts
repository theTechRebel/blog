import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedComponent } from './compnents/featured/featured.component';
import { HomeComponent } from './compnents/home/home.component';
import { FooterComponent } from './compnents/footer/footer.component';
import { RecentComponent } from './compnents/recent/recent.component';
import { AuthorComponent } from './compnents/author/author.component';
import { PostComponent } from './compnents/post/post.component';
import { RelatedComponent } from './compnents/related/related.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedComponent,
    HomeComponent,
    FooterComponent,
    RecentComponent,
    AuthorComponent,
    PostComponent,
    RelatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
