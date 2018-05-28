import { ModuleWithProviders } from '@angular/core'
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
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
    { path: 'admin/videos', component: AdminVideosComponent, canActivate: [AdminGuard] },
    { path: 'admin/articles', component: AdminArticlesComponent, canActivate: [AdminGuard] },
    { path: 'admin/article/:id', component: AdminArticleComponent, canActivate: [AdminGuard] },
    { path: 'admin/users', component: UsersComponent, canActivate: [AdminGuard] },
    { path: 'admin/playlists', component: AdminPlaylistsComponent, canActivate: [AdminGuard] },
    { path: 'admin/twitch', component: AdminTwitchStreamsComponent, canActivate: [AdminGuard] },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);