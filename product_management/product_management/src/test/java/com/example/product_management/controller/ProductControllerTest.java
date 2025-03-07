<<<<<<< HEAD
package com.example.product_management.controller;

import com.example.product_management.Model.Product;
import com.example.product_management.Service.ProductServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;

@SpringBootTest
class ProductControllerTest {
    @InjectMocks
    private ProductController productController;

    @Mock
    private ProductServiceImpl productService;
    private Product product;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);

        product=new Product();
        product.setId(1);
        product.setProductName("Mobile");
        product.setDescription("Electronics");
        product.setPrice(300.0f);
        product.setStatus("Not Available");
    }

    @Test
    void saveProduct() {
        when(productService.saveProduct(any(Product.class))).thenReturn(product);
        ResponseEntity<Product> response =(ResponseEntity<Product>) productController.saveProduct(product);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(product, response.getBody());
    }

    @Test
    void getAllProduct() {
        List<Product> products= Arrays.asList(product);
        when(productService.getAllProduct()).thenReturn(products);
        ResponseEntity<List<Product>> response=(ResponseEntity<List<Product>>) productController.getAllProduct();
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(products, response.getBody());
    }

    @Test
    void getProductById() {
        when(productService.getProductById(1)).thenReturn(product);
        ResponseEntity<Product> response=(ResponseEntity<Product>)productController.getProductById(1);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(product, response.getBody());

    }

    @Test
    void deleteProduct() {
        when(productService.deleteProduct(1)).thenReturn("Deleted Successfully");
        ResponseEntity<Void> response = (ResponseEntity<Void>) productController.deleteProduct(1);
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void updateProduct() {
        when(productService.updateProduct(any(Product.class),anyInt())).thenReturn(product);
        ResponseEntity<Product> response = (ResponseEntity<Product>) productController.updateProduct(product,1);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(product,response.getBody());
    }
=======
package com.example.product_management.controller;

import com.example.product_management.Model.Product;
import com.example.product_management.Service.ProductServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;

@SpringBootTest
class ProductControllerTest {
    @InjectMocks
    private ProductController productController;

    @Mock
    private ProductServiceImpl productService;
    private Product product;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);

        product=new Product();
        product.setId(1);
        product.setProductName("Mobile");
        product.setDescription("Electronics");
        product.setPrice(300.0f);
        product.setStatus("Not Available");
    }

    @Test
    void saveProduct() {
        when(productService.saveProduct(any(Product.class))).thenReturn(product);
        ResponseEntity<Product> response =(ResponseEntity<Product>) productController.saveProduct(product);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(product, response.getBody());
    }

    @Test
    void getAllProduct() {
        List<Product> products= Arrays.asList(product);
        when(productService.getAllProduct()).thenReturn(products);
        ResponseEntity<List<Product>> response=(ResponseEntity<List<Product>>) productController.getAllProduct();
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(products, response.getBody());
    }

    @Test
    void getProductById() {
        when(productService.getProductById(1)).thenReturn(product);
        ResponseEntity<Product> response=(ResponseEntity<Product>)productController.getProductById(1);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(product, response.getBody());

    }

    @Test
    void deleteProduct() {
        when(productService.deleteProduct(1)).thenReturn("Deleted Successfully");
        ResponseEntity<Void> response = (ResponseEntity<Void>) productController.deleteProduct(1);
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void updateProduct() {
        when(productService.updateProduct(any(Product.class),anyInt())).thenReturn(product);
        ResponseEntity<Product> response = (ResponseEntity<Product>) productController.updateProduct(product,1);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(product,response.getBody());
    }
>>>>>>> b9c8a9b (initial push)
}