import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleError } from 'src/helper/error-helper';

@Injectable({
    providedIn: "root"
  })
  export class EnviromentService {
    constructor(
      private http: HttpClient,
    ) {}

    testApi(): Observable<string> {
        return this.http.get<string>("http://localhost:8000/ping")
          .pipe(
            catchError((error) => {
              return handleError(error);
            }),
          );
    }

    testDb(): Observable<string> {
        return this.http.get<string>("http://localhost:8000/pingMysql")
          .pipe(
            catchError((error) => {
              return handleError(error);
            }),
          );
    }
}