import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { ServicedemoService } from 'src/app/servicedemo.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent {

    customer: Customer={
      customer_name: '',
      customer_contact: '',
      customer_email: '',
      customer_address: '',
      pin: undefined
  }
  
   id:number=0;
  
  constructor(
    private customerService: ServicedemoService,
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
      this.customerService.getCust(id).subscribe((data) => {
        this.customer = data;
      });
    }

  update() {
    this.customerService.updateCust(this.customer,this.id).subscribe(() => {
      this.router.navigate(['/']);
      
    });
}
postData()
 {
  // this.student.student_name=this.addStudentForm.controls.student_name.value;
     
   this.customerService.postCust(this.customer).subscribe(() => {
           this.router.navigate(['/get_orders'])
           }
          
   );
     
 }
 


}
