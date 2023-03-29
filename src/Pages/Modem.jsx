import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineFork } from "react-icons/ai";
import { modems } from "../data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Modem = () => {
  return (
    <section className="section-modem">
      <div className="conatiner">
        <div className="section-modem-all">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {modems.map((modem) => (
              <SwiperSlide>
                <div className="box-modem" id={modem.id}>
                  <div className="hovered">
                    <div className="search">
                      <BiSearchAlt fontSize={22} />
                    </div>
                    <div className="share">
                      <AiOutlineFork fontSize={22} />
                    </div>
                  </div>
                  <div className="modem">
                    <img
                      className="image-modem"
                      src={modem.img}
                      alt={modem.name}
                    />
                    <span className="desc-modem">{modem.desc}</span>
                    <span className="called">تماس بگیرید</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </section>
  );
};

export default Modem;
