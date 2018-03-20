import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { AdminVideosComponent } from './admin/videos/videos.component';
import { AdminArticlesComponent } from './admin/articles/articles.component';
import { AdminArticleComponent } from './admin/articles/article.component';
import { UsersComponent } from './admin/users/users.component';
import { EditorComponent } from './editor/editor.component';
import { EditorArticlesComponent } from './editor/articles/articles.component';

import { AdminGuard } from './core/admin.guard';
import { EditorGuard } from './core/editor.guard';
import { CanReadGuard } from './core/can-read.guard';
import { ArticlesComponent } from './articles/articles.component';
import { VidsComponent } from './vids/vids.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'account', component: AccountComponent },
	{ path: 'articles', component: ArticlesComponent },
	{ path: 'videos', component: VidsComponent },
	{ path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
	{ path: 'admin/videos', component: AdminVideosComponent, canActivate: [AdminGuard] },
	{ path: 'admin/articles', component: AdminArticlesComponent, canActivate: [AdminGuard] },
	{ path: 'admin/article/:id', component: AdminArticleComponent, canActivate: [AdminGuard] },
	{ path: 'admin/users', component: UsersComponent, canActivate: [AdminGuard] },
	{ path: 'editor', component: EditorComponent, canActivate: [EditorGuard] },
	{ path: 'editor/articles', component: EditorArticlesComponent, canActivate: [EditorGuard] },
	{ path: '*', redirectTo: 'home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
