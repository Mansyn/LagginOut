import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, Event, NavigationError } from '@angular/router';

import * as StackTraceParser from 'error-stack-parser';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AuthService } from '../auth.service';
import { User } from '../../models/user';

@Injectable()
export class ErrorsService {

    user: User

    constructor(
        private injector: Injector,
        private router: Router,
        public auth: AuthService
    ) {

        this.auth.user$.subscribe((user) => {
            if (user && user.uid) {
                this.user = user
            } else {
                this.user.displayName = 'guest'
            }
        })

        // Subscribe to the NavigationError
        this.router
            .events
            .subscribe((event: Event) => {
                if (event instanceof NavigationError) {
                    // Redirect to the ErrorComponent
                    this.log(event.error)
                        .subscribe((errorWithContext) => {
                            this.router.navigate(['/error'], { queryParams: errorWithContext })
                        });
                }
            });
    }

    log(error) {
        // Log the error to the console
        console.error(error);
        // Send error to server
        const errorToSend = this.addContextInfo(error);
        return fakeHttpService.post(errorToSend);
    }

    addContextInfo(error) {
        // You can include context details here (usually coming from other services: UserService...)
        const name = error.name || null;
        const appId = 'Laggin Out';
        const user = this.user.displayName;
        const time = new Date().getTime();
        const id = `${appId}-${user}-${time}`;
        const location = this.injector.get(LocationStrategy);
        const url = location instanceof PathLocationStrategy ? location.path() : '';
        const status = error.status || null;
        const message = error.message || error.toString();
        const stack = error instanceof HttpErrorResponse ? null : StackTraceParser.parse(error);

        const errorWithContext = { name, appId, user, time, id, url, status, message, stack };
        return errorWithContext;
    }

}

class fakeHttpService {
    static post(error): Observable<any> {
        console.log('Error sent to the server: ', error);
        return Observable.of(error);
    }
}
