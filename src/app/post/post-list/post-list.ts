import { Component, OnInit } from '@angular/core';
import { PostModel } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})

export class PostList implements OnInit {
  posts: PostModel[] = [];

  constructor(private postService: PostService) {}

  onDelete(postId: string) {
    console.log(postId);
    this.postService.deleteItem(postId);
  }

  ngOnInit(): void {
    this.postService
      .getItemsUpdateListener()
      .subscribe((posts: PostModel[]) => {
        this.posts = posts;
      });

    this.postService.getItems();
  }
}
