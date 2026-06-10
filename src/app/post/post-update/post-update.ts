import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostModel } from '../post.model';
import { PostService } from '../post.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-post-update',
  standalone: false,
  templateUrl: './post-update.html',
  styleUrl: './post-update.css',
})
export class PostUpdate implements OnInit {
  post: PostModel;

  private postId!: string;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap) => {
      if (paramMap.has('postId')) {
        this.postId = paramMap.get('postId')!;
        // if (this.postId) {
          this.postService.getItem(this.postId).subscribe((postData) => {
            this.post = {
              id: postData._id,
              title: postData.title,
              content: postData.content,
            };
          });
        // }
      }else {
        this.postId = null;
      }
    });
  }

  updatePost(form: NgForm): void {
      this.postService.updateItem(
        this.postId,
        form.value.title,
        form.value.content
      );
    console.log('updatePost successfully', this.post);
  }
}

