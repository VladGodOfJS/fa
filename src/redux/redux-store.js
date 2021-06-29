import {applyMiddleware, combineReducers, createStore } from "redux";
import productsReducer from "./products-reducer";
import sliderReducer from "./slider-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  productPage: productsReducer,
  sliderPage:sliderReducer,
  form:formReducer,
});
let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;
