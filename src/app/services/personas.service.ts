/**
 * Created by seradiazpin on 07/09/2017.
 */
import {Injectable} from '@angular/core'

import {Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonasService{
  constructor(private http: Http) {}
  getPersonsList(): Promise<JSON>{
      return this.http.get("http://pensiones-web.herokuapp.com/personas")
      .toPromise()
      .then(
        (response: Response) => {
          return response.json();
        });
  };
  getPersonsInfo(id): Promise<JSON> {
      return this.http.get("http://pensiones-web.herokuapp.com/personas/"+id)
          .toPromise()
          .then(
          (response: Response) => {
              return response.json();
          });
  };
}