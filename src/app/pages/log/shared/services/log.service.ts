import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Log } from '../models/log.model';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  urlQL : string = environment.quantumLeap.url;

  constructor(private http: HttpClient) { }

  sendLogMessage( message ) {

    return this.http.get<Log>( `${this.urlQL}/` );
  }


}
