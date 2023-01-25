import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/order';
import { ServicedemoService } from 'src/app/servicedemo.service';



@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit{

  order:Order={
    order_name: '',
    shipping_charge: undefined,
    status: '',
    total_price: undefined,
    order_date: undefined,
    customer: {
      customer_name: '',
      customer_contact: '',
      customer_email: '',
      customer_address: '',
      pin: undefined
    },
    product:{
      product_name:'',
        product_quantity:undefined,
        product_price:undefined
    }
  }
 ot:Order=new Order();
 constructor(private serv:ServicedemoService,private router:Router){}
 ngOnInit(): void {
  
 }



 postData()
 {
  // this.student.student_name=this.addStudentForm.controls.student_name.value;
     
   this.serv.post(this.order).subscribe(() => {
           this.router.navigate(['/get_orders'])
           }
          
   );
     
 }
}