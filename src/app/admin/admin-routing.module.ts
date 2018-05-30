import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AdminComponent } from './admin.component'
import { AdminVideosComponent } from './videos/videos.component'
import { AdminArticlesComponent } from './articles/articles.component'
import { AdminArticleComponent } from './articles/article.component'
import { UsersComponent } from './users/users.component'
import { AdminPlaylistsComponent } from './playlists/playlists.component'
import { AdminTwitchStreamsComponent } from './twitch/twitch.component'

import { AdminGuard } from '../core/admin.guard'

const routes: Routes = [
    { path: '', component: AdminComponent, canActivate: [AdminGuard] },
    { path: 'videos', component: AdminVideosComponent, canActivate: [AdminGuard] },
    { path: 'articles', component: AdminArticlesComponent, canActivate: [AdminGuard] },
    { path: 'article/:id', component: AdminArticleComponent, canActivate: [AdminGuard] },
    { path: 'users', component: UsersComponent, canActivate: [AdminGuard] },
    { path: 'playlists', component: AdminPlaylistsComponent, canActivate: [AdminGuard] },
    { path: 'twitch', component: AdminTwitchStreamsComponent, canActivate: [AdminGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }