import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostModel } from '../post.model';
import { PostService } from '../post.service';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-post-update',
  standalone: false,
  templateUrl: './post-update.html',
  styleUrl: './post-update.css',
})
export class PostUpdate implements OnInit {
  post: PostModel;
  form: FormGroup;

  private postId!: string;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required],
      }),
      content: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
    });
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
          this.form.patchValue({
            title: this.post.title,
            content: this.post.content
          });
        });
        // }
      }else {
        this.postId = null;
      }
    });
  }

  updatePost(): void {
    if (this.form.invalid) {
      return;
    }
      this.postService.updateItem(
        this.postId,
        this.form.value.title,
        this.form.value.content
      );
    console.log('updatePost successfully', this.form.value);
  }
}

