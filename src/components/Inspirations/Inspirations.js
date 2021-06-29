import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";


SwiperCore.use([Navigation, Pagination, A11y]);

const Inspirations = (props) => {
  return (
    <div className="inspirations">
      <div className="container">
        <div className="inspirations-inner">
          <h2 className="title inspirations-inner__title">Tips & Tricks</h2>

          <div className="slider-wrapp">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            autoHeight={true}
            navigation={true}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768:{
                slidesPerView:2,
              },

              1170:{
                slidesPerView:2.5,
              },
              1250:{
                slidesPerView:3,
              },
            }}
          >
            {props.slides.map((s) => {
            return  <SwiperSlide key={s.id}>
               <div className="slide-content">
                <img className="slide-content__img" src={s.url} alt="rooms" />
                <h3 className="slide-content__title">{s.title}</h3>
                <p className="slide-content__sub-title">{s.subtitle}</p>
              </div>
            </SwiperSlide>;
            })}
          </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspirations;
