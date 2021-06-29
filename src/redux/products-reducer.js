import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import product5 from "../assets/images/product5.png";
import product6 from "../assets/images/product6.png";
import product7 from "../assets/images/product7.png";
import product8 from "../assets/images/product8.png";
import { productsAPI } from "../api/api";

const initialstate = {
  products: [
    {
      image: product1,
      title: "Syltherine",
      category: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: product2,
      title: "Leviosa",
      category: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: product3,
      title: "Lolito",
      category: "Luxury big sofa",
      price: "Rp 7.000.000",
    },
    {
      image: product4,
      title: "Respira",
      category: "Minimalist fan",
      price: "Rp 500.000",
    },
    {
      image: product5,
      title: "Grifo",
      category: "Night lamp",
      price: "Rp 1.500.000",
    },
    {
      image: product6,
      title: "Muggo",
      category: "Small mug",
      price: "Rp 150.000",
    },
    {
      image: product7,
      title: "Pingky",
      category: "Cute bed set",
      price: "Rp 7.000.000",
    },
    {
      image: product8,
      title: "Potty",
      category: "Minimalist flower pot",
      price: "Rp 2.500.000",
    },
  ],
};

const productsPage = (state = initialstate, action) => {
  if (action.type === "SET_PRODUCTS") {
    return {
      state,
      products: action.products,
    };
  } else if (action.type === "SET_MORE_PRODUCTS") {
    ///Глубокое копирывание
    let copy = { ...state };
    copy.products = [...state.products];
    action.products.map((p) => {
      return copy.products.push(p);
    });
    return copy;
  }
  return state;
};

export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    products: products,
  };
};

const setMoreProducts = (products) => {
  return {
    type: "SET_MORE_PRODUCTS",
    products: products,
  };
};

export const getMoreProductsThunkCreator = () => {
  return (dispatch) => {
    productsAPI.getProducts().then((resp) => {
      console.log(resp);
      dispatch(setMoreProducts(resp.data));
    });
  };
};

export default productsPage;
