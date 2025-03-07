import axios from 'axios';

const APIURL="http://localhost:8081";

class ProductService{
    saveProduct(product){
        return axios.post(APIURL+"/saveProduct",product);
    }

    getAllProduct(){
        return axios.get(APIURL+"/");
    }

    getProductById(id){
        return axios.get(APIURL+"/"+id);
    }

    deleteProduct(id){
        return axios.delete(APIURL+"/deleteProduct/"+id);
    }

    updateProduct(product){
        return axios.put(APIURL+"/updateProduct/"+product.id,product);
    }

}

export default new ProductService;