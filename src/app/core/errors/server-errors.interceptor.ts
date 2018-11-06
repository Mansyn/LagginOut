import { Injectable } from '@angular/core'
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http'
import { Router } from '@angular/router'

import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { ErrorsService } from './errors.service';

@Injectable()
export class ServerErrorsInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private errorsService: ErrorsService,
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(() => {
            const newReq = req.clone();
            return next.handle(newReq);
        }));
    }
}
