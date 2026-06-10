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

  ngOnInit(): void {
    this.postService.getItems();
    this.postService
      .getItemsUpdateListener()
      .subscribe((pList: PostModel[]) => {
        // pList[0, 1, 2]
        this.posts = pList;
      });
  }
}
