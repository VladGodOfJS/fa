import "./App.scss";
import ProductsContainer from "./components/OurProducts/ProductsContainer";
import InspirationContainer from "./components/Inspirations/InspirationContainer";
import Intro from "./components/Intro/Intro";
import Header from "./components/Header/Header";
import Feature from "./components/Feature/Feature";
import Furniture from "./components/Furniture/Furniture";
import Footer from "./components/Footer/Footer";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Feature />
      <ProductsContainer />
      <InspirationContainer />
      <Furniture />
      <Footer />
    </div>
  );
}

export default App;
