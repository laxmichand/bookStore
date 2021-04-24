import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { LoaderState } from './loader';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();

  loaderState = this.loaderSubject.asObservable();

  constructor() {}

  show(flag: boolean) {
    this.loaderSubject.next(<LoaderState>{ show: flag });
  }

  hide(flag: boolean) {
    this.loaderSubject.next(<LoaderState>{ show: flag });
  }
}
