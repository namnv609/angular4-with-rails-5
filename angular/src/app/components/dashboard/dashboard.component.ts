import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  posts: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("/api/v1/posts")
      .subscribe(res => { this.posts = res })
  }

}
