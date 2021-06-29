import React from "react";
import { connect } from "react-redux";
import Products from "./Products";
import { setProducts, getMoreProductsThunkCreator } from "../../redux/products-reducer";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  showMoreProducts = () => {
    this.props.getMoreProductsThunkCreator()
  };

  render() {
    return (
      <>
        <Products {...this.props} showMoreProducts={this.showMoreProducts} />
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    products: state.productPage.products,
  };
};

export default connect(mapStateToProps, { setProducts,getMoreProductsThunkCreator })(
  ProductsContainer
);
