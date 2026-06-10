import { Injectable } from '@angular/core';
import { PostModel } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class PostService {
  private items: PostModel[] = [];
  private itemsUpdated = new Subject<PostModel[]>();

  constructor(private http: HttpClient) {}

  getItems() {
    this.http
      .get<{ message: string; body: { _id: string; title: string; content: string }[] }>( //body (post): not allow any type, so we specify the type of response data here
        'http://localhost:3000/api/posts'
      )
      .pipe(
        map((postData) => {
          return postData.body.map((post) => {
            return {
              title: post.title,
              content: post.content,
              id: post._id
            };
          });
        })
      )
      .subscribe((postData) => {
        console.log(postData);
        this.items = postData;
        this.itemsUpdated.next([...this.items]);
      });
  }

  deleteItem(postId: string) {
    this.http
      .delete('http://localhost:3000/api/posts/' + postId)
      .subscribe((responseData) => {
        const updatedPosts = this.items.filter((post) => post.id !== postId);
        this.items = updatedPosts;
        this.itemsUpdated.next([...this.items]);
        console.log(responseData);
      });
  }

  addItem(title: string, content: string) {
    const instance: PostModel = {
      id: 'id',
      title: title,
      content:  content
    };
    this.http
      .post<{ message: string; postId: string }>('http://localhost:3000/api/posts', instance)
      .subscribe((responseData) => {
        console.log(responseData.message);
        instance.id = responseData.postId;
        this.items.push(instance);
        this.itemsUpdated.next([...this.items]);

      });
  }

  getItemsUpdateListener() {
    return this.itemsUpdated.asObservable();
  }
}