import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';

import { AddOrderComponent } from './order/add-order/add-order.component';
import { ListOrderComponent } from './order/list-order/list-order.component';
import { UpdateOrderComponent } from './order/update-order/update-order.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'get_orders', pathMatch: 'full' },  
  { path: 'get_orders', component: ListOrderComponent },  
  { path: 'place_order', component: AddOrderComponent },
  { path: 'update-update_order/:id',component: UpdateOrderComponent },
  // { path: 'delete-delete_order/:id',component: DeleteOrderComponent  },
  { path: 'customers', component: ListCustomerComponent },  
  { path: 'customer', component: AddCustomerComponent },
  { path: 'update-customer/:id',component: UpdateCustomerComponent },
  // { path: 'delete-customer/:id',component: DeleteCustomerComponent  },
  { path: 'get-customer/:id',component: ListCustomerComponent },
  { path: 'products', component: ListProductComponent },  
  { path: 'product', component: AddProductComponent },
  { path: 'update-product/:id',component: UpdateProductComponent },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
