import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { EditorComponent } from './editor.component'
import { EditorArticlesComponent } from './articles/articles.component'
import { EditorArticleComponent } from './articles/article.component'

import { EditorGuard } from '../core/editor.guard'

const routes: Routes = [
  { path: '', component: EditorComponent, canActivate: [EditorGuard] },
  { path: 'articles', component: EditorArticlesComponent, canActivate: [EditorGuard] },
  { path: 'article/:id', component: EditorArticleComponent, canActivate: [EditorGuard] },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
