import React, { useEffect, useState } from "react";
import productService from "../service/product.service";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct=()=>{

    const [product,setProduct]=useState({
        id:"",
        productName:"",
        description:"",
        price:"",
        status:"",
    });
    const [msg ,setMsg]=useState("");
    const [serverErrors, setServerErrors]=useState({});

    const {id}=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        productService.getProductById(id)
        .then((res)=>{
            setProduct(res.data);
            setServerErrors({}); 
        }).catch((err)=>{
            if (err.response && err.response.status === 400) {
                const errors = err.response.data.errors.reduce((acc, error) => {
                  acc[error.field] = error.message;
                  return acc;
                }, {});
                setServerErrors(errors); 
            } else {
                console.log(err);
            }
        });
    },[]);

    const handleChange=(e)=>{
        const value=e.target.value;
        setProduct({...product,[e.target.name]:value})
    };

    const ProductUpdate=(e)=>{
        e.preventDefault();
        productService.updateProduct(product)
        .then((res)=>{
            navigate("/");
        }).catch((err)=>{
            console.log(err);
        })
    };

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header fs-3 text-center">
                            Add Product
                        </div>
                        {
                            msg && <p className="fs-4 text-center text-success">{msg}</p>
                        }
                        <div className="card-body">
                            <form onSubmit={(e)=>ProductUpdate(e)}>
                                <div className="mb-3">
                                    <label>Enter Product Name</label>
                                    <input type="text" 
                                    name="productName" 
                                    className="form-control"
                                    value={product.productName}
                                    onChange={(e)=>handleChange(e)}/>
                                </div>
                                <div className="mb-3">
                                    <label>Enter Description</label>
                                    <input type="text" 
                                    name="description" 
                                    className="form-control"
                                    value={product.description}
                                    onChange={(e)=>handleChange(e)}/>
                                </div>
                                <div className="mb-3">
                                    <label>Enter Price</label>
                                    <input type="text" 
                                    name="price" 
                                    className="form-control"
                                    value={product.price}
                                    onChange={(e)=>handleChange(e)}/>
                                </div>
                                <div className="mb-3">
                                    <label>Enter Status</label>
                                    <input type="text" 
                                    name="status" 
                                    className="form-control"
                                    value={product.status}
                                    onChange={(e)=>handleChange(e)}/>
                                </div>
                                <button className="btn btn-primary col-md-12" type="submit">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default UpdateProduct;