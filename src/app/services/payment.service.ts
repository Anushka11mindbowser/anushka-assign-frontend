import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

successfulPayment(payment:any):Observable<any>{
  return this.http.post("http://localhost:3000/transactions", payment)
}

failedPayment(id:any):Observable<any>{
  return this.http.post("http://127.0.0.1:8000/card/transaction_list", id)
}

}
