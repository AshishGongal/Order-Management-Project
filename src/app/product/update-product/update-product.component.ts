import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ServicedemoService } from 'src/app/servicedemo.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  product: Product={
    product_name: '',
    product_quantity: '',
    product_price: ''
}

 id:number=0;

constructor(
  private productService: ServicedemoService,
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
    this.productService.getProd(id).subscribe((data) => {
      this.product = data;
    });
  }

update() {
  this.productService.updateProd(this.product,this.id).subscribe(() => {
    this.router.navigate(['/']);
    
  });
}
postData()
{
// this.student.student_name=this.addStudentForm.controls.student_name.value;
   
 this.productService.postProd(this.product).subscribe(() => {
         this.router.navigate(['/get_orders'])
         }
        
 );
   
}



}

