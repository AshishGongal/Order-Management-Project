import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/order';
import { ServicedemoService } from 'src/app/servicedemo.service';


@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit{
  
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
  
   id:number=0;
  
  constructor(
    private orderService: ServicedemoService,
    private router: Router,
    private route: ActivatedRoute,
    // private serv:ServicedemoService
    ) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe((param) => {
         this.id = Number(param.get('id'));
        this.getById(this.id);
        
      });
    }

    getById(id: number) {
      this.orderService.get(id).subscribe((data) => {
        this.order = data;
      });
    }

  update() {
    this.orderService.update(this.order,this.id).subscribe(() => {
      this.router.navigate(['/']);
      
    });
}
postData()
 {
  // this.student.student_name=this.addStudentForm.controls.student_name.value;
     
   this.orderService.post(this.order).subscribe(() => {
           this.router.navigate(['/get_orders'])
           }
          
   );
     
 }
 


}
