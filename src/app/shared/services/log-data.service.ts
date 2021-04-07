import { Injectable } from '@angular/core';
import { LogModel } from '../models/log.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogDataService {

  private logDataService = new Subject<LogModel>();

  constructor(private http: HttpClient) {
    this.logDataService.subscribe(
      (log) => {
        //console.log ( log );
        this.create ( log );
      }
    );
  }

  setLog(log : LogModel){
    this.logDataService.next( log );
  }

  create(log : LogModel){
    this.http.post( environment.logData.url , log )
    .pipe(
      take(1)
    )
    .subscribe(
      (log) => {console.log ( log )}
    );
  }

}
