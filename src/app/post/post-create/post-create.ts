import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-create',
  standalone: false,
  templateUrl: './post-create.html',
  styleUrl: './post-create.css',
})
export class PostCreate {
  constructor(private postService: PostService) {}

  addPost(form: NgForm) {
    console.log(form.value.title);
    console.log(form.value.content);
    this.postService.addItem(form.value.title, form.value.content);
  }
}
