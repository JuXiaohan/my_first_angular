import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostList } from './post/post-list/post-list';
import { PostCreate } from './post/post-create/post-create';
import { PostUpdate } from './post/post-update/post-update';

const routes: Routes = [
  { path: '', component: PostList },
  { path: 'create', component: PostCreate },
  { path: 'edit/:postId', component: PostUpdate }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
