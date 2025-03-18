// import React, { useState } from "react";
// import productService from "../service/product.service";

// const AddProduct=()=>{

//     const [product,setProduct]=useState({
//         productName:"",
//         description:"",
//         price:"",
//         status:"",
//     });
//     const [msg ,setMsg]=useState("");
//     const [serverErrors, setServerErrors]=useState({});

//     const handleChange=(e)=>{
//         const value=e.target.value;
//         setProduct({...product,[e.target.name]:value})
//     };

//     const ProductRegister=(e)=>{
//         e.preventDefault();
//         productService.saveProduct(product)
//         .then((res)=>{
//             console.log("Product Added Successfully");
//             setMsg("Product Added Successfully");
//             setProduct({
//                 productName:"",
//                 description:"",
//                 price:"",
//                 status:"",
//             });
//             setServerErrors({}); 
//         }).catch((err)=>{
//             if (err.response && err.response.status === 400) {
//                 const errors = err.response.data.errors.reduce((acc, error) => {
//                   acc[error.field] = error.message;
//                   return acc;
//                 }, {});
//                 setServerErrors(errors); 
//             } else {
//                 console.log(err);
//             }
//         });
//     };

//     return(
//         <div className="container mt-5">
//             <div className="row">
//                 <div className="col-md-6 offset-md-3">
//                     <div className="card">
//                         <div className="card-header fs-3 text-center">
//                             Add Product
//                         </div>
//                         {
//                             msg && <p className="fs-4 text-center text-success">{msg}</p>
//                         }
//                         <div className="card-body">
//                             <form onSubmit={(e)=>ProductRegister(e)}>
//                                 <div className="mb-3">
//                                     <label>Enter Product Name</label>
//                                     <input type="text" 
//                                     name="productName" 
//                                     className="form-control"
//                                     value={product.productName}
//                                     onChange={(e)=>handleChange(e)}/>
//                                 </div>
//                                 <div className="mb-3">
//                                     <label>Enter Description</label>
//                                     <input type="text" 
//                                     name="description" 
//                                     className="form-control"
//                                     value={product.description}
//                                     onChange={(e)=>handleChange(e)}/>
//                                 </div>
//                                 <div className="mb-3">
//                                     <label>Enter Price</label>
//                                     <input type="text" 
//                                     name="price" 
//                                     className="form-control"
//                                     value={product.price}
//                                     onChange={(e)=>handleChange(e)}/>
//                                 </div>
//                                 <div className="mb-3">
//                                     <label>Enter Status</label>
//                                     <input type="text" 
//                                     name="status" 
//                                     className="form-control"
//                                     value={product.status}
//                                     onChange={(e)=>handleChange(e)}/>
//                                 </div>
//                                 <button className="btn btn-primary col-md-12" type="submit">Submit</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>  
//         </div>
//     )
// }

// export default AddProduct;


import React, { useState } from "react";
import productService from "../service/product.service";

const AddProduct = () => {
    const [product, setProduct] = useState({
        productName: "",
        description: "",
        price: "",
        status: "",
    });
    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value });
    };

    const ProductRegister = (e) => {
        e.preventDefault();
        if (!product.productName || !product.description || !product.price || !product.status) {
            alert("Please fill in all fields before submitting!");
            return;
        }

        productService.saveProduct(product)
            .then((res) => {
                console.log("Product Added Successfully");
                setMsg("Product Added Successfully");
                setProduct({
                    productName: "",
                    description: "",
                    price: "",
                    status: "",
                });
               
            }).catch((err) => {
                if (err.response && err.response.status === 400) {
                    const errors = err.response.data.errors.reduce((acc, error) => {
                        acc[error.field] = error.message;
                        return acc;
                    }, {});
                } else {
                    console.log(err);
                }
            });
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card shadow">
                        <div className="card-header fs-3 text-center bg-primary text-white">
                            Add Product
                        </div>
                        {msg && <p className="fs-4 text-center text-success">{msg}</p>}
                        <div className="card-body">
                            <form onSubmit={ProductRegister}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Product Name</label>
                                        <input type="text"
                                            name="productName"
                                            className="form-control"
                                            value={product.productName}
                                            onChange={handleChange}
                                            placeholder="Enter product name" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Description</label>
                                        <input type="text"
                                            name="description"
                                            className="form-control"
                                            value={product.description}
                                            onChange={handleChange}
                                            placeholder="Enter description" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Price</label>
                                        <input type="number"
                                            name="price"
                                            className="form-control"
                                            value={product.price}
                                            onChange={handleChange}
                                            placeholder="Enter price" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Status</label>
                                        <select className="form-select"
                                            name="status"
                                            value={product.status}
                                            onChange={handleChange}>
                                            <option value="">Select Status</option>
                                            <option value="Available">Available</option>
                                            <option value="Out of Stock">Out of Stock</option>
                                        </select>
                                    </div>
                                </div>

                                <button className="btn btn-primary mt-4 col-12" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
