import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PostCreate } from './post/post-create/post-create';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Header } from './header/header';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { PostList } from './post/post-list/post-list';
import { HttpClientModule } from '@angular/common/http';
import { PostUpdate } from './post/post-update/post-update';

@NgModule({
  declarations: [App, PostCreate, Header, PostList, PostUpdate],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
