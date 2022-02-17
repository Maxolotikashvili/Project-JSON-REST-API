import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)},

  { path: 'posts/:id', loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule) },

  { path: 'albums', loadChildren: () => import('./albums/albums.module').then(m => m.AlbumsModule) },

  { path: 'albums/:id', loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule) },

  { path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: '**',
    component: PagenotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
