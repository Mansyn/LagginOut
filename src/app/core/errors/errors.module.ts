import { NgModule, ErrorHandler } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import {
  MatButtonModule,
  MatCardModule
} from '@angular/material';

import { ErrorsHandler } from './errors.handler'
import { ErrorsService } from './errors.service'
import { ServerErrorsInterceptor } from './server-errors.interceptor'

import { ErrorRoutingModule } from './errors-routing.module'
import { ErrorsComponent } from './component/errors.component'



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ErrorRoutingModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [
    ErrorsComponent
  ],
  providers: [
    ErrorsService,
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorsInterceptor,
      multi: true
    }
  ]
})
export class ErrorsModule { }
