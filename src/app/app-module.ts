import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PostCreate } from './post/post-create/post-create';
import { FormsModule } from '@angular/forms';
import { Header } from './header/header';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [App, PostCreate, Header],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MatToolbarModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
