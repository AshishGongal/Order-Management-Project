import { Component } from '@angular/core';
import { Product } from 'src/app/product';
import { ServicedemoService } from 'src/app/servicedemo.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  product:Product[]=[];

  
  displayedColumns: string[] = ['product_id', 'product_name','product_quantity','product_price','actions','orders'];

  constructor(private serv:ServicedemoService)
  {}
  
 
  ngOnInit(): void {
    this.getAllProduct();
  }
 

  getAllProduct()
  {

    this.serv.getAllProd().subscribe(data=>
      {
       this.product=data

      });
  }

  openDeleteModal(id:number)
  {
    
    if(window.confirm("Do you want to delete this record?"))
    {
            this.serv.deleteProd(id).subscribe(() => {
              this.getAllProduct();
              //this.router.navigate(['/']);
         
            });
          }


}
}

  


