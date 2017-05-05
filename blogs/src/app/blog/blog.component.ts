import { Component, OnInit } from '@angular/core';
import { PostService } from "./post.service";
import { Post } from "./post";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  providers: [PostService],
})
export class BlogComponent implements OnInit {

  title: string = "Blog";
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {

    this.postService.getPosts().subscribe(res => {
      console.log(res);
      this.posts = res as Post[];
    }, err => {
      console.log(err);
    })
  }

}
