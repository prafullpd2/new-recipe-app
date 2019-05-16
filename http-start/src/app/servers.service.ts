import {Injectable} from '@angular/core';
import {Http, Headers } from '@angular/http';

@Injectable()
export class ServersService{
  constructor(private http: Http){

  }
  storeService(servers: any[]){
    const headers = new Headers({'Content-type': 'application/json'});
    return this.http.post('https://my-angular-1994.firebaseio.com/data.json',
      servers, { headers: headers });
  }

  getServers(){

    return this.http.get('https://my-angular-1994.firebaseio.com/data.json');
  }

}
