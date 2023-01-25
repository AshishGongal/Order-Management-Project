import { Customer } from "./customer";
import { Product } from "./product";

export class Order {
    order_name:string='';
    shipping_charge:any;
    status:string='';
    total_price:any;
    order_date:any;
    customer:Customer={
        customer_name:'',
        customer_contact:'',
        customer_email:'',
        customer_address:'',
        pin:0
    };
    product:Product={
        product_name:'',
        product_quantity:0,
        product_price:0
    };
    
    // customer_contact:string='';
    // customer_email:string='';
    // customer_address:string='';
    // pin:any;
    
    // product_name:string='';
    // product_quantity:any;
    // product_price:any;
    // customer_name:string='';
    // customer_contact:string='';
    // customer_email:string='';
    // customer_address:string='';
    // pin:any;
    
    // product_name:string='';
    // product_quantity:any;
    // product_price:any;
    // customer_name:string='';
    // customer_contact:string='';
    // customer_email:string='';
    // customer_address:string='';
    // pin:any;
    
}
