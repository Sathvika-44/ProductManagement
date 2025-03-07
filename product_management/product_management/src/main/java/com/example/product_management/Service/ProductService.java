<<<<<<< HEAD
package com.example.product_management.Service;

import com.example.product_management.Model.Product;

import java.util.List;

public interface ProductService {

    public Product saveProduct(Product product);
    public List<Product> getAllProduct();
    public Product getProductById(Integer id);
    public String deleteProduct(Integer id);
    public Product updateProduct(Product product,Integer id);
}
=======
package com.example.product_management.Service;

import com.example.product_management.Model.Product;

import java.util.List;

public interface ProductService {

    public Product saveProduct(Product product);
    public List<Product> getAllProduct();
    public Product getProductById(Integer id);
    public String deleteProduct(Integer id);
    public Product updateProduct(Product product,Integer id);
}
>>>>>>> b9c8a9b (initial push)
