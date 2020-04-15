import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit, AfterViewInit  {

  constructor() { }
  ngAfterViewInit(): void {
     // @ts-ignore
     twttr.widgets.load();
  }

  ngOnInit(): void {
  }

}
