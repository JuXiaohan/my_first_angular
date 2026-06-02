import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  standalone: false,
  templateUrl: './post-create.html',
  styleUrl: './post-create.css',
})
export class PostCreate {
  postContent = '';
  name = 'Xiaohan';
  clickMe() {
    alert('submit button clicked!');
  }
}
