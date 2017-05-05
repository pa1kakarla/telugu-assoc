import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  providers: [PostService]
})
export class PostFormComponent implements OnInit {

  post: Post = new Post();
  errorMessage = "";

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.postService.createPost(this.post).subscribe(res => {
      console.log(res.id);
      this.router.navigate(['']).then(result=>{window.location.href = 'https://www.paypal.com/donate/?token=m2XFp3YTRkth8uCEa1bMnW4KztH31blWvCDu41nrDlLTCowgSfr1G0lrYTAIbCJBKK4fyG';});
    }, err => {
      console.log(err);
      this.errorMessage = "An error saving the post";
    })
    
  }
}
