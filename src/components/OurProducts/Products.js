import share from '../../assets/images/share.svg';
import like from '../../assets/images/like.svg';

const Products = (props) => {
  const onShowProducts = () => {
    props.showMoreProducts();
  };
  return (
    <div className="our-products">
        <div className="container">
            <div className="our-products-inner">
            <h2 className="our-products-inner__title title" id="product-card">Our Products</h2>
      
      <div className="wrapp-product-cards">
        {props.products.map((p) => {
          return (
            <div className="product-card" >
              <img className="product-card__img" src={p.image} alt="products" />
              <h3 className="product-card__title">{p.title}</h3>
              <p className="product-card__category">{p.category}</p>
              <p className="product-card__price product-card__price--nth ">{p.price}</p>
              <div className="card-content">
                  <div className="card-content__cart-btn">Add to cart</div>
                  <div className="wrapp-social-media">
                      <div className="social-icon">
                          <img className="social-icon__icon" src={share} alt="share"/>
                          <p className="social-icon__text">Share</p>
                      </div>
                      <div className="social-icon">
                          <img className="social-icon__icon" src={like} alt="share"/>
                          <p className="social-icon__text">Like</p>
                      </div>
                  </div>
              </div>
            </div>
          );
        })}
       
        </div>
        <div className="show-more-btn" onClick={onShowProducts}>Show More</div>
            </div>

      </div>
    </div>
  );
};

export default Products;
