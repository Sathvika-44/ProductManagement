<<<<<<< HEAD
package com.example.product_management.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Entity
public class Product {
    @Valid
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    @NotBlank(message = "Product Name is mandatory")
    @NotNull(message="Product Name is mandatory")
    private String productName;

    @NotBlank(message="Product Description is mandatory")
    @NotNull(message="Product Description is mandatory")
    private String description;

    @Positive(message = "Price must be positive")
    @Min(value=1)
    @NotNull(message="Price is mandatory")
    private double price;

    @NotNull(message="Product Status is mandatory")
    @NotBlank(message="Product Status is mandatory")
    private String status;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
=======
package com.example.product_management.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Entity
public class Product {
    @Valid
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    @NotBlank(message = "Product Name is mandatory")
    @NotNull(message="Product Name is mandatory")
    private String productName;

    @NotBlank(message="Product Description is mandatory")
    @NotNull(message="Product Description is mandatory")
    private String description;

    @Positive(message = "Price must be positive")
    @Min(value=1)
    @NotNull(message="Price is mandatory")
    private double price;

    @NotNull(message="Product Status is mandatory")
    @NotBlank(message="Product Status is mandatory")
    private String status;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
>>>>>>> b9c8a9b (initial push)
