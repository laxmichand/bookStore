import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  options: any;
  constructor(
    private http: HttpClient,
    @Inject('apiBase') private _api: string
  ) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  public saveBooks(req: any) {
    return this.http
      .post(this._api + '/book/savebook', req)
      .pipe(catchError(this.handleError));
  }

  public getAllBooks() {
    return this.http
      .get(this._api + '/book/getallbook')
      .pipe(catchError(this.handleError));
  }

  public deletedbyId(id: any) {
    return this.http
      .delete(this._api + '/book/delete/' + id)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
