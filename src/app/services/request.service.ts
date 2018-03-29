import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/do';

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {

  constructor(private cookieService:CookieService,public router:Router){
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const changedReq = req.clone({headers: req.headers.set('Authorization', 'Bearer '+this.cookieService.get('token'))});

    return next.handle(changedReq).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401  && err.url.indexOf('api/v1/login') === -1) {
          // this.router.navigateByUrl('login?unauthorized=true');
          this.cookieService.deleteAll();
        }
      }
    });
  };
}