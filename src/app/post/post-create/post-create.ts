import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-create',
  standalone: false,
  templateUrl: './post-create.html',
  styleUrl: './post-create.css',
})
export class PostCreate implements OnInit {
  form: FormGroup;
  postItem = {};

  constructor(private postService: PostService) {}

  addPost() {
    if (this.form.invalid) {
      return;
    }
    this.postItem = {
      title: this.form.value.title,
      content: this.form.value.content,
    };
    console.log(this.postItem);
    this.postService.addItem(this.form.value.title, this.form.value.content);
    this.form.reset();
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required],
      }),
      content: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
    });
  }
}