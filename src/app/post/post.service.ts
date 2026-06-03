import { Injectable } from '@angular/core';
import { PostModel } from './post.model';
import { Title } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root',
})

export class PostService {
  private items: PostModel[] = [];

  getItems() {
    return this.items;
  }

  addItem(title: string, content: string) {
    const instance: PostModel = {
      title: title,
      content:  content
    };
    this.items.push(instance);
    console.log('form add Item', this.items);
  }
}