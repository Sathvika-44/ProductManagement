import React, { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import productService from "../service/product.service";
import { SearchContext } from "./SearchContext"; 

const Home = () => {
    const [productList, setProductList] = useState([]);
    const [msg, setMsg] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const { searchQuery } = useContext(SearchContext);

    useEffect(() => {
        init();
    }, []);

    const init = () => {
        productService.getAllProduct()
            .then((res) => {
                setProductList(res.data);
                setFilteredProducts(res.data);
            }).catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        if (searchQuery === "") {
            setFilteredProducts(productList);
        } else {
            setFilteredProducts(
                productList.filter((p) => 
                    p.productName.toUpperCase().includes(searchQuery)
                )
            );
        }
    }, [searchQuery, productList]);

    const deleteProduct = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            productService.deleteProduct(id)
                .then(() => {
                    setMsg("Product deleted Successfully");
                    init(); 
                })
                .catch((error) => {
                    console.log(error);
                    alert("Something went wrong while deleting the product.");
                });
        }
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card shadow">
                        <div className="card-header fs-3 text-center bg-info text-white">
                            Product List
                        </div>
                        {msg && <p className="fs-4 text-center text-success">{msg}</p>}
                        <div className="card-body text-start">
                            <div className="row">
                                { filteredProducts.length > 0 ? (
                                    filteredProducts.map((p, index) => (
                                    <div className="col-md-4 mb-4" key={p.id}>
                                        <div className="card shadow-sm h-100">
                                            <div className="row g-0 h-100">
                                                <div className="col-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title text-primary">
                                                            Product Name: {p.productName.toUpperCase()}
                                                        </h5>
                                                        <p className="card-text">
                                                            Product Description: {p.description}
                                                        </p>
                                                        <p className="card-text">Price: Rs.{p.price}</p>
                                                        <p
                                                            className={`${p.status === "Available"
                                                                ? "card-text text-success"
                                                                : "card-text text-danger"
                                                                }`}
                                                        >
                                                            Product Status: {p.status}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-4 d-flex align-items-center justify-content-center">
                                                    <div className="btn-group-vertical">
                                                        <Link
                                                            to={"updateProduct/" + p.id}
                                                            className="btn btn-primary btn-sm mb-4"
                                                        >
                                                            Update
                                                        </Link>
                                                        <button
                                                            onClick={() => deleteProduct(p.id)}
                                                            className="btn btn-danger btn-sm"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))) : (
                                    <p className="text-center fs-5 text-danger">No roducts.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
