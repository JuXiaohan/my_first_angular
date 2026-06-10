import { Injectable } from '@angular/core';
import { PostModel } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class PostService {
  private items: PostModel[] = [];
  private itemsUpdated = new Subject<PostModel[]>();

  constructor(private http: HttpClient) {}

  getItems() {
    this.http
      .get<{ message: string; body: PostModel[] }>(
        'http://localhost:3000/api/posts'
      )
      .subscribe((postData) => {
        this.items = postData.body;
        this.itemsUpdated.next([...this.items]);
      });
  }

  addItem(title: string, content: string) {
    const instance: PostModel = {
      id: 'id',
      title: title,
      content:  content
    };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/posts', instance)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.items.push(instance);
        // need backend to handle
        this.itemsUpdated.next([...this.items]);
        console.log('form add Item', this.items);
      });
  }

  getItemsUpdateListener() {
    return this.itemsUpdated.asObservable();
  }
}