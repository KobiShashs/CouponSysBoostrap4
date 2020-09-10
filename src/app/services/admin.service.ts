import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public constructor(private httpClient: HttpClient) { }

  public getAllCompanies(): Observable<any>{
      return this.httpClient.get<any>('url');
  }
  //2. get all customers
  //3. add comapny
  //4...
}
