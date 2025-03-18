
package com.example.product_management.Service;


import com.example.product_management.Model.Product;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ProductServiceImplTest {

    @Autowired
    private  ProductServiceImpl productServiceImpl;
    Product product;


    @BeforeEach
    void setUp() {
        product = new Product();
        product.setId(1);
        product.setProductName("Redmi7 Pro");
        product.setDescription("Mobile Phone");
        product.setPrice(5000.0f);
        product.setStatus("Available");

        productServiceImpl.saveProduct(product);
    }

    @Test
    void saveProductTest() {
        Product newProduct = new Product();
        newProduct.setId(2);
        newProduct.setProductName("New Product");
        newProduct.setDescription("New Description");
        newProduct.setPrice(150.0);
        newProduct.setStatus("In Stock");

        Product response = productServiceImpl.saveProduct(newProduct);
        assertNotNull(response);
        assertEquals(1, productServiceImpl.getAllProduct().size());
    }

    @Test
    void getAllProductsTest() {
        List<Product> products = productServiceImpl.getAllProduct();

        assertNotNull(products);
        assertEquals(2, products.size());
    }

    @ParameterizedTest
    @CsvSource({
            "2"
    })
    void getProductByIdTest(int id){
        Product result=productServiceImpl.getProductById(id);
        assertNotNull(result);
    }

    @ParameterizedTest
    @CsvSource({
            "1,Product Delete Successfully"
    })
    void deleteProductTest(int id, String excepted) {
        String result = productServiceImpl.deleteProduct(id);

        assertEquals(excepted, result);
        assertEquals(0,  productServiceImpl.getAllProduct().size());
    }

    @Test
    void  updateProductTest(){
        Product updatedProduct = new Product();
        updatedProduct.setProductName("Updated Product");
        updatedProduct.setDescription("Updated Description");
        updatedProduct.setPrice(150.0);
        updatedProduct.setStatus("Out of Stock");

        Product result = productServiceImpl.updateProduct(updatedProduct, 2);

        assertNotNull(result);
        assertEquals("Updated Product", result.getProductName());
        assertEquals("Updated Description", result.getDescription());
    }
}