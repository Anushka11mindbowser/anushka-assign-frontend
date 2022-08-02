import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url = "http://127.0.0.1:8000/card/getProduct/2"

  constructor(private http:HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get<any>(this.url);
  }


}
