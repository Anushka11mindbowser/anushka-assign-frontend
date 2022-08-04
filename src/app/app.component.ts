import { Component, OnInit } from '@angular/core';
import { PaymentService } from './services/payment.service';
import { FormsModule } from '@angular/forms';
import {loadStripe} from '@stripe/stripe-js';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'payment-gateway';

  paymentHandler:any = null;

  paymentDetails:any

  airpodsProduct:any

  descriptionArray:any

  
productQuantity = 1;


  

  
  
  constructor(private ps:PaymentService, private router:Router){

  }

  ngOnInit(){
   
    
    this.retrieveProduct()
    console.log(this.productQuantity)
  }

  
  goToSuccess(){
    this.router.navigateByUrl('/success-page')
  }

 retrieveProduct(){
  this.ps.getProduct().subscribe((data:any)=>{
    this.airpodsProduct = data
    this.descriptionArray = this.airpodsProduct[data]
    console.log(this.airpodsProduct)
    console.log(this.airpodsProduct.data.product_description)
    let description_string = this.airpodsProduct.data.product_description
    this.descriptionArray = description_string.split(".")
    console.log(this.descriptionArray)
  })
 }

  
  
  goToCheckout(quantity:any){
    this.ps.checkout(quantity.value).subscribe((url)=>{
      window.open(url)
    })
  }

}