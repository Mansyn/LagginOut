import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { VideosComponent } from './videos/videos.component';
import { AddVideoComponent } from './videos/add/add.component';
import { EditVideoComponent } from './videos/edit/edit.component';

import { AdminGuard } from './core/admin.guard';
import { EditorGuard } from './core/editor.guard';
import { CanReadGuard } from './core/can-read.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent},
  { path: 'videos', component: VideosComponent },
  { path: 'video/add', component: AddVideoComponent },
  { path: 'video/edit/:id', component: EditVideoComponent, canActivate: [EditorGuard] },
  { path: '*', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
