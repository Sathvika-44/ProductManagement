// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import productService from "../service/product.service";

// const Home = () => {

//     const [productList, setProductList] = useState([]);
//     const [msg ,setMsg]=useState("");

//     useEffect(() => {
//         init();
//     }, []);

//     const init=()=>{
//         productService.getAllProduct()
//             .then((res) => {
//                 setProductList(res.data);
//             }).catch((error) => {
//                 console.log(error)
//             });
//     }

//     const deleteProduct=(id)=>{
//         productService.deleteProduct(id)
//         .then((res)=>{
//             setMsg("Product deleted Successfully");
//             init();
//         }).catch((error)=>{
//             console.log(error);   
//         })
//     }

//     return (
//         <div className=" container mt-5">
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="card">
//                         <div className="card-header fs-3 text-center">
//                             All Product List
//                         </div>
//                         {
//                             msg && <p className="fs-4 text-center text-success">{msg}</p>
//                         }
//                         <div className="card-body">
//                             <table class="table">
//                                 <thead>
//                                     <tr>
//                                         <th scope="col">Sl No</th>
//                                         <th scope="col">Product Name</th>
//                                         <th scope="col">Description</th>
//                                         <th scope="col">Price</th>
//                                         <th scope="col">Status</th>
//                                         <th scope="col">Action</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         productList.map((p,index) => (
//                                             <tr>
//                                                 <td>{index+1}</td>
//                                                 <td>{p.productName}</td>
//                                                 <td>{p.description}</td>
//                                                 <td>{p.price}</td>
//                                                 <td>{p.status}</td>
//                                                 <td>
//                                                     <Link to={"updateProduct/"+p.id} className="btm btn-sm  btn-primary p-2">Update</Link>
//                                                     <button onClick={()=>deleteProduct(p.id)} className="btm btn-sm  btn-danger m-2 p-1">Delete</button>
//                                                 </td>
//                                             </tr>

//                                         ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../service/product.service";

const Home = () => {
    const [productList, setProductList] = useState([]);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        init();
    }, []);

    const init = () => {
        productService.getAllProduct()
            .then((res) => {
                setProductList(res.data);
            }).catch((error) => {
                console.log(error);
            });
    }

    const deleteProduct = (id) => {
        productService.deleteProduct(id)
            .then((res) => {
                setMsg("Product deleted Successfully");
                init();
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card shadow">
                        <div className="card-header fs-3 text-center bg-primary text-white">
                            All Product List
                        </div>
                        {
                            msg && <p className="fs-4 text-center text-success">{msg}</p>
                        }
                        <div className="card-body">
                            <div className="row">
                                {
                                    productList.map((p, index) => (
                                        <div className="col-md-4 mb-4" key={p.id}>
                                            <div className="card shadow-sm">
                                                <div className="card-body">
                                                    <h5 className="card-title text-primary">Product Name: {p.productName}</h5>
                                                    <p className="card-text">Product Description: {p.description}</p>
                                                    <p className="card-text">Price: Rs.{p.price}</p>
                                                    <p className={`${p.status === "Available" ? "card-text text-success" : "card-text text-danger"}`}>Product Status: {p.status}</p>
                                                    <div className="mt-3">
                                                        <Link to={"updateProduct/" + p.id} className="btn btn-primary btn-sm me-2">Update</Link>
                                                        <button onClick={() => deleteProduct(p.id)} className="btn btn-danger btn-sm">Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
