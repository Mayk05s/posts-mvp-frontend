import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: 'home', component: PostsComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'detail', redirectTo: '/home', pathMatch: 'full' },
  { path: 'detail/:id', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
