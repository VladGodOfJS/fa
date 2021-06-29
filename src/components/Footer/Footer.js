import { Link } from "react-router-dom";
import { SendEmailReduxForm } from "./SendEmail";

const Footer = () => {
const onSubmit=(formData)=>{
  //берем обьект с данными (емеил юзера) который подготовл нам  онСабмит
  console.log(formData.email);
}
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <ul className="footer-nav">
            <li className="footer-nav__item">.Lorem</li>
            <li className="footer-nav__item footer-nav__item--color">
              Worldwide furniture store since 2020. We sell over 1000+ branded
              products on our website
            </li>
            <li className="footer-nav__item">
           
              <Link to="/">
              <svg
                  width="16"
                  height="19"
                  viewBox="0 0 16 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.97404 18.5413C11.0898 17.0976 15.9167 13.3048 15.9167 8.74992C15.9167 4.37766 12.3723 0.833252 8 0.833252C3.62775 0.833252 0.083334 4.37766 0.083334 8.74992C0.083334 13.3048 4.91025 17.0976 7.02596 18.5413C7.61759 18.945 8.38241 18.945 8.97404 18.5413ZM8 11.2499C9.38071 11.2499 10.5 10.1306 10.5 8.74992C10.5 7.36921 9.38071 6.24992 8 6.24992C6.61929 6.24992 5.5 7.36921 5.5 8.74992C5.5 10.1306 6.61929 11.2499 8 11.2499Z"
                    fill="#898989"
                  />
                </svg>
                Sawojajar Malang, Hawaii
              </Link>
            </li>
            <li className="footer-nav__item">
          
              <Link>
              <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4307 11.0668L10.9152 11.8401C10.8123 11.9944 10.6762 12.1261 10.4969 12.1735C9.90946 12.3287 8.3499 12.3988 5.9755 10.0244C3.60111 7.65004 3.67119 6.09046 3.82641 5.50302C3.8738 5.32368 4.00549 5.1876 4.15983 5.0847L4.93308 4.5692C5.50878 4.1854 5.66435 3.40757 5.28055 2.83187L3.82014 0.64126C3.48514 0.138762 2.83933 -0.0532187 2.28423 0.18468L1.62544 0.467021C1.12498 0.681503 0.716742 1.06643 0.47324 1.55343C0.269804 1.96031 0.112126 2.38877 0.0907621 2.84317C0.0234363 4.27515 0.337433 7.80312 4.26713 11.7328C8.19682 15.6625 11.7248 15.9765 13.1568 15.9092C13.6111 15.8878 14.0396 15.7301 14.4465 15.5267C14.9335 15.2832 15.3184 14.8749 15.5329 14.3745L15.8152 13.7157C16.0531 13.1606 15.8612 12.5148 15.3587 12.1798L13.168 10.7194C12.5923 10.3356 11.8145 10.4911 11.4307 11.0668Z"
                    fill="#898989"
                  />
                </svg>
                +6289 456 3455
              </Link>
            </li>
            <li className="footer-nav__item">
              <Link to="/">www.lorem.com</Link>
            </li>
          </ul>

          <ul className="footer-nav">
            <li className="footer-nav__item">Menu</li>
            <li className="footer-nav__item">
              {" "}
              <Link to="/products">Products</Link>
            </li>
            <li className="footer-nav__item">
              <Link>Rooms</Link>
            </li>
            <li className="footer-nav__item">
              <Link to="/">Inspirations</Link>
            </li>
            <li className="footer-nav__item">
              <Link to="/">About Us</Link>
            </li>
            <li className="footer-nav__item">
              <Link to="/">Terms & Policy</Link>
            </li>
          </ul>

          <ul className="footer-nav">
            <li className="footer-nav__item">Account</li>
            <li className="footer-nav__item">
              {" "}
              <Link to="/products">My Account</Link>
            </li>
            <li className="footer-nav__item">
              <Link>Checkout</Link>
            </li>
            <li className="footer-nav__item">
              <Link to="/">My Cart</Link>
            </li>
            <li className="footer-nav__item">
              <Link to="/">My catalog</Link>
            </li>
          </ul>
          <ul className="footer-nav">
            <li className="footer-nav__item">Stay Connected</li>
            <li className="footer-nav__item">
              {" "}
              <Link to="/products">Facebook</Link>
            </li>
            <li className="footer-nav__item">
              <Link  to="/">Instagram</Link>
            </li>
            <li className="footer-nav__item">
              <Link to="/">Twitter</Link>
            </li>
          </ul>


<div className="footer-form">
    <h3 className="footer-form__title">
    Stay Updated
    </h3>
  <SendEmailReduxForm onSubmit={onSubmit}/>
</div>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
