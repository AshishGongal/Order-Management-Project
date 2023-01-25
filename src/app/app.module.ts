import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicedemoService } from './servicedemo.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { AddOrderComponent } from './order/add-order/add-order.component';
import { ListOrderComponent } from './order/list-order/list-order.component';
import { UpdateOrderComponent } from './order/update-order/update-order.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOrderComponent,
    AddOrderComponent,
    UpdateOrderComponent,
    ListCustomerComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    ListProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    OrderComponent,
    CustomerComponent,
    ProductComponent,
    
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule
  
 

  
   
  ],
  providers: [ServicedemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
8