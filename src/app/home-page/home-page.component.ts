import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  title = 'payment-gateway';

  paymentHandler:any = null;

  paymentDetails:any

  airpodsProduct:any

  descriptionArray:any

  
productQuantity = 1;


  

  constructor(private ps:PaymentService, private router:Router) { }

  ngOnInit(): void {
    this.retrieveProduct()
    console.log(this.productQuantity)
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

  

