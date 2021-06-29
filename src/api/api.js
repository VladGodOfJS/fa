import * as axios from "axios";

export const productsAPI={
    getProducts(){
      return  axios.get("https://fakestoreapi.com/products?limit=8")
    }
}

