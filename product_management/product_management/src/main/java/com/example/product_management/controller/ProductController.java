
package com.example.product_management.controller;

import com.example.product_management.Model.Product;
import com.example.product_management.Service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping("/saveProduct")
    public ResponseEntity<?> saveProduct(@Valid @RequestBody Product product) {
        return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<?> getAllProduct() {
        return new ResponseEntity<>(productService.getAllProduct(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable("id") Integer id) {
        return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
    }

    @DeleteMapping("/deleteProduct/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable("id") Integer id) {
        return new ResponseEntity<>(productService.deleteProduct(id), HttpStatus.OK);
    }

    @PutMapping("/updateProduct/{id}")
    public ResponseEntity<?> updateProduct(@Valid @RequestBody Product product,@PathVariable("id") Integer id) {
        return new ResponseEntity<>(productService.updateProduct(product,id), HttpStatus.OK);
    }


}
