package com.example.demo.serviceImpl;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.example.demo.Service.CustomerService;
import com.example.demo.Service.OrderService;
import com.example.demo.Service.ProductService;

@SpringBootTest

public class OrderServiceImplTest {

// creating instance for ProductService,CustomerService,ProductService

	@Autowired
	private OrderService orderService;
	
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private ProductService productService;

// Test for getting order details by id
	// positive test case
	@Test
	public void testGetOrderById() {
		// get order name
		String name = orderService.getorder(1).getOrder_name();
		// compare order name
		assertEquals("Mobile+Laptop", name);
	}

// Test for getting order details by price
	// negetive test case
	@Test
	public void testGetOrderPriceById() {
		// get order name
		int price = orderService.getorder(1).getTotal_price();
		// compare order name
		assertEquals(500, price);
	}
	
	@Test
	public void testGetCustomerById() {
		// get customer name
		String name = customerService.getCustomer(1).getCustomer_name();
		// compare customer name
		assertEquals("Akshay", name);
	}
	@Test
	public void testGetProductById() {
		// get product name
		String name = productService.getProduct(1).getProduct_name();
		// compare product name
		assertEquals("Oppo Reno 9 Pro", name);
	}
}
		


