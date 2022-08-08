import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url = "http://127.0.0.1:8000/card/getProduct/3"

  constructor(private http:HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  

  checkout(quantity:any):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/card/webhook', {quantity:quantity},
    {
      responseType:'text'
    })
  }
  }



