import {Injectable} from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './globla.service';



@Injectable()
  export class UserService {
   public URL: string;

   constructor(private http: HttpClient){
     this.URL = GLOBAL.URL;
   }
   // tslint:disable-next-line: typedef
   signup(usertologin, getHash = null){
     if (getHash != null){
          usertologin.getHash = getHash;
     }

      // tslint:disable-next-line: prefer-const
     const    json = JSON.stringify(usertologin);

      // tslint:disable-next-line: prefer-const
     const  params = json;

     const headers = new HttpHeaders( {'Content-Type' : 'aplication/json' } );
      // tslint:disable-next-line: object-literal-shorthand
     return this.http.post(this.URL + 'login', params, {  headers: headers }).pipe(map(res => res ));

   }
  }
