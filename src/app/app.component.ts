import { Component, OnInit } from '@angular/core';
import { PaymentService } from './services/payment.service';

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
  

  
  
  constructor(private ps:PaymentService){

  }

  ngOnInit(){
    this.invokeStripe()
    this.retrieveProduct()
  }

  
  

 retrieveProduct(){
  this.ps.getProduct().subscribe((data:any)=>{
    this.airpodsProduct = data
    this.descriptionArray = this.airpodsProduct[data]
    console.log(this.airpodsProduct)
    console.log(this.descriptionArray)
  })
 }

  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LQVquSBTNc3iOhUZLD2PhPsdL9rhSFjCTGbcfdzUiMOOm2FDlungzRNuSUP1QI3vlWJ9i88w10BWWgyHarzbqgO00AzCF9jum',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'Apple Airpods',
      description: 'Magic Remastered',
      amount: amount * 100,
    });
  }
  

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LQVquSBTNc3iOhUZLD2PhPsdL9rhSFjCTGbcfdzUiMOOm2FDlungzRNuSUP1QI3vlWJ9i88w10BWWgyHarzbqgO00AzCF9jum',
          locale: 'auto',
          token: function (stripeToken: any) {


            console.log(stripeToken);
            
            alert('Payment has been successfull!');
            alert(script)

            this.ps.successfulPayment(stripeToken).subscribe((data:{})=>
            this.paymentDetails=data)
            console.log(this.paymentDetails)


          },
          
        });
      };
      window.document.body.appendChild(script);
    }
  }



}
