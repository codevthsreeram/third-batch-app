import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, retry } from 'rxjs/operators';
const baseURL = "https://www.tektutorialsHub.com/";

export class AppInterceptor implements HttpInterceptor {

    constructor(private router: Router) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const API_KEY = '123456';
        var newRequest = req.clone({
            url: baseURL + req.url,
            setHeaders: { API_KEY }
        });
        return next.handle(req.clone({ setHeaders: { API_KEY }, headers: req.headers.set('Content-Type', 'application/json') }))
            .pipe(retry(2), map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if (event.status === 500) {
                        this.router.navigate(['/home']);
                    }
                    return event;
                }
            }));
    }
}