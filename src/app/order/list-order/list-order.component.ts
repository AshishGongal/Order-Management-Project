import { Component } from '@angular/core';
import { Order } from 'src/app/order';
import { ServicedemoService } from 'src/app/servicedemo.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent {
  orders:Order[]=[];
  
  displayedColumns: string[] = ['order_id', 'order_name','shipping_charge','status','total_price','order_date','actions','customerproducts'];

  constructor(private serv:ServicedemoService)
  {}
  
 
  ngOnInit(): void {
    this.getAllOrders();
  }
 

  getAllOrders()
  {

    this.serv.getAll().subscribe(data=>
      {
          this.orders=data;

      });
  }
  openDeleteModal(id:number)
  {
    
    if(window.confirm("Do you want to delete this record?"))
    {
            this.serv.delete(id).subscribe(() => {
              this.getAllOrders();
              //this.router.navigate(['/']);
         
            });
          }


}}
