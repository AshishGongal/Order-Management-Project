import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';
import { Customer } from './customer';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ServicedemoService {

  
  constructor(private http:HttpClient) { }

  // get(id:Number):Observable<Student>
  // {
  //   console.log("Get request sent...."); 
  //   return this.http.get<Student>("http://localhost:8080/student/"+id);

  // }

  // post(student:Student):Observable<Student>
  // {
  //     //return this.http.post("http://localhost:8080/test",student,{responseType:'text'} );
  //     return this.http.post<Student>("http://localhost:8080/student",student);
  // }

  // getAll():Observable<Student[]>
  // {
  //   console.log("Get all request sent...."); 
  //   return this.http.get<Student[]>("http://localhost:8080/students");

  // }
//   get(id:Number):Observable<Product>
//   {
//     console.log("Get request sent...."); 
//     return this.http.get<Product>("http://localhost:8080/product/"+id);

//   }

//   post(product:Product):Observable<Product>
//   {
//       //return this.http.post("http://localhost:8080/test",student,{responseType:'text'} );
//       return this.http.post<Product>("http://localhost:8080/product",product);
//   }

//   getAll():Observable<Product[]>
//   {
//     console.log("Get all request sent...."); 
//     return this.http.get<Product[]>("http://localhost:8080/products");

//   }
// }
get(id:Number):Observable<Order>
  {
    console.log("Get request sent...."); 
    return this.http.get<Order>("http://localhost:8080/get_order/"+id);

  }

  getCust(id:Number):Observable<Customer>
  {
    console.log("Get request sent...."); 
    return this.http.get<Customer>("http://localhost:8080/customer/"+id);

  }

  getProd(id:Number):Observable<Product>
  {
    console.log("Get request sent...."); 
    return this.http.get<Product>("http://localhost:8080/product/"+id);

  }

  post(order:Order):Observable<Order>
  {
      //return this.http.post("http://localhost:8080/test",student,{responseType:'text'} );
      return this.http.post<Order>("http://localhost:8080/place_order",order);
  }

  postCust(customer:Customer):Observable<Customer>
  {
      //return this.http.post("http://localhost:8080/test",student,{responseType:'text'} );
      return this.http.post<Customer>("http://localhost:8080/customer",customer);
  }

  postProd(product:Product):Observable<Product>
  {
      //return this.http.post("http://localhost:8080/test",student,{responseType:'text'} );
      return this.http.post<Product>("http://localhost:8080/product",product);
  }

  getAll():Observable<Order[]>
  {
    console.log("Get all request sent...."); 
    return this.http.get<Order[]>("http://localhost:8080/get_orders");

  }

  getAllCust():Observable<Customer[]>
  {
    console.log("Get all request sent...."); 
    return this.http.get<Customer[]>("http://localhost:8080/customers");

  }

  getAllProd():Observable<Product[]>
  {
    console.log("Get all request sent...."); 
    return this.http.get<Product[]>("http://localhost:8080/products");

  }

  

  

  delete(id:number):Observable<any>
  {
    return this.http.delete("http://localhost:8080/delete_order/"+id,{responseType:'text'});

  }

  deleteCust(id:number):Observable<any>
  {
    return this.http.delete("http://localhost:8080/customer/"+id,{responseType:'text'});

  }

  deleteProd(id:number):Observable<any>
  {
    return this.http.delete("http://localhost:8080/product/"+id,{responseType:'text'});

  }

  update(order:Order,id:number):Observable<Order>
  {
   return this.http.put<Order>("http://localhost:8080/update_order/"+id,order);

  }

  updateCust(customer:Customer,id:number):Observable<Customer>
  {
   return this.http.put<Customer>("http://localhost:8080/customer/"+id,customer);

  }

  updateProd(product:Product,id:number):Observable<Product>
  {
   return this.http.put<Product>("http://localhost:8080/product/"+id,product);

  }
}
