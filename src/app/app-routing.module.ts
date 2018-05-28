import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';

import { EditorComponent } from './editor/editor.component';
import { EditorArticlesComponent } from './editor/articles/articles.component';
import { ArticlesComponent } from './articles/articles.component';
import { VideosComponent } from './videos/videos.component';
import { RegisterComponent } from './account/register/register.component';
import { TwitchComponent } from './twitch/twitch.component';
import { TwitchStreamsComponent } from './components/twitch-streams/twitch-streams.component';
import { EditorArticleComponent } from './editor/articles/article.component';

import { EditorGuard } from './core/editor.guard';
import { CanReadGuard } from './core/can-read.guard';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'account', component: AccountComponent },
	{ path: 'account/login', component: LoginComponent },
	{ path: 'account/register', component: RegisterComponent },
	{ path: 'articles', component: ArticlesComponent },
	{ path: 'social', component: SocialComponent },
	{ path: 'videos', component: VideosComponent },
	{ path: 'twitch', component: TwitchComponent },
	{ path: 'editor', component: EditorComponent, canActivate: [EditorGuard] },
	{ path: 'admin', loadChildren: 'admin/admin.module#AdminModule' },
	{ path: 'editor/articles', component: EditorArticlesComponent, canActivate: [EditorGuard] },
	{ path: 'editor/article/:id', component: EditorArticleComponent, canActivate: [EditorGuard] },
	{ path: '*', redirectTo: 'home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
