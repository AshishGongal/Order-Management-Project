import { Component } from '@angular/core';
import { Customer } from 'src/app/customer';
import { ServicedemoService } from 'src/app/servicedemo.service';




@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent {
  customer:Customer[]=[];

  
  displayedColumns: string[] = ['customer_id', 'customer_name','customer_contact','customer_email','customer_address','pin','actions','customerproducts'];

  constructor(private serv:ServicedemoService)
  {}
  
 
  ngOnInit(): void {
    this.getAllCustomers();
  }
 

  getAllCustomers()
  {

    this.serv.getAllCust().subscribe(data=>
      {
       this.customer=data

      });
  }

  openDeleteModal(id:number)
  {
    
    if(window.confirm("Do you want to delete this record?"))
    {
            this.serv.deleteCust(id).subscribe(() => {
              this.getAllCustomers();
              //this.router.navigate(['/']);
         
            });
          }


}
}

  

