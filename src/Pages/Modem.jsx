import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineFork } from "react-icons/ai";
import { modems } from "../data/Data";
const Modem = () => {
  return (
    <section className="section-modem">
      <div className="conatiner">
        <div className="section-modem-all">
          {modems.map((modem) => (
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
                <img className="image-modem" src={modem.img} alt={modem.name} />
                <span className="desc-modem">{modem.desc}</span>
                <span className="modem-price">
                  {modem.price}
                  <span>تومان</span>
                </span>
                <span className="called">تماس بگیرید</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modem;
