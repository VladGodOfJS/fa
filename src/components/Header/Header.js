import{Link} from 'react-scroll';
import like from "../../assets/images/header-like.svg";
import cart from "../../assets/images/cart.svg";
import load from "../../assets/images/load.svg";
import arrow from "../../assets/images/arrow-down.svg";
import{useState} from 'react';
const Header = () => {

 
  const [activeClass ,setActiveClass]= useState(false);
  

  const dropMenu=()=>{
    setActiveClass(!activeClass);

  }

  const onLinkShow=()=>{
    setActiveClass(!activeClass);
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <a href="/" className="header-inner__logo">
            Lorem.
          </a>
          <div className={activeClass?"burger active":"burger"} onClick={dropMenu}>
          <div className="burger__line"></div>
            <div className="burger__line"></div>
            <div className="burger__line"></div>
            <div className="burger__line"></div>
          </div>
          <nav className={activeClass?"nav drop":"nav"}>
            <ul className="menu">
              <li className="menu__item">
                <Link onClick={onLinkShow} className="menu__link" to="product-card" smooth={true} duration={1000}>
                  Products  <img className="menu__icon" src={arrow} alt="arrow" />
                </Link>
               
              </li>

              <li className="menu__item">
                <Link onClick={onLinkShow}  className="menu__link" to="rooms" smooth={true} duration={1000}>
                  Rooms  <img className="menu__icon" src={arrow} alt="arrow" />
                </Link>
                 
              </li>
              <li className="menu__item">
                <Link className="menu__link" to="/inspiration">
                  Inspirations
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-cart">
            <img src={like} alt="like" className="header-cart__icon" />
            <div className="header-cart__link">
              <img src={cart} alt="like" className="header-cart__icon " />
              <div className="circle-block">
                  <div className="circle-block__circle"></div>
                  <div className="circle-block__circle"></div>
              </div>
            </div>
            <img src={load} alt="like" className="header-cart__load" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
