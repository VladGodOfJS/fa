import img1 from "../../assets/images/furniture1.png";
import img2 from "../../assets/images/furniture2.png";
import img3 from "../../assets/images/furniture3.png";
import img4 from "../../assets/images/furniture4.png";
import img5 from "../../assets/images/furniture5.png";
import img6 from "../../assets/images/furniture6.png";
import img7 from "../../assets/images/furniture7.png";
import img8 from "../../assets/images/furniture8.png";

const Furniture = () => {
  return (
    <div className="furniture">
      <div className="container">
      <p className="furniture-sup-title">Share your setup with</p>
            <h2 className="title" id="rooms">#LoremFurniture</h2>
        <div className="furniture-inner">
          <div className="furniture-left">
            <img className="furniture-left__img" src={img1} alt="furniture" />
            <img className="furniture-left__img" src={img2} alt="furniture" />
            <img className="furniture-left__img" src={img3} alt="furniture" />
            <img className="furniture-left__img" src={img4} alt="furniture" />
          </div>
          <div className="furniture-right">
            <img className="furniture-right__img" src={img5} alt="furniture" />
            <img className="furniture-right__img" src={img6} alt="furniture" />
            <img className="furniture-right__img" src={img7} alt="furniture" />
            <img className="furniture-right__img" src={img8} alt="furniture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
