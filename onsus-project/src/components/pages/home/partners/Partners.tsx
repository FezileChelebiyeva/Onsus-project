import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import partner1 from "../../../../assets/images/home/partners/partner1.png";
import partner2 from "../../../../assets/images/home/partners/partner2.png";
import partner3 from "../../../../assets/images/home/partners/partner3.png";
import "./Partners.scss";
const Partners = () => {
  return (
    <section id="partners">
      <div className="container">
        <div className="partners">
          <Swiper
            spaceBetween={0}
            slidesPerView={8}
            breakpoints={{
              1440: {
                slidesPerView: 8,
              },
              1200: {
                slidesPerView: 8,
              },
              1024: {
                slidesPerView: 6,
              },
              993: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={partner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={partner2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={partner3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={partner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={partner2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={partner3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={partner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={partner2} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
