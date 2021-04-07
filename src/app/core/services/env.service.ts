import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EnvService {

  production : boolean;
  storageKeysConfig;

  constructor() { 
    
    this.production = environment.production;
    this.storageKeysConfig = environment.storageKeysConfig;
  }

}
