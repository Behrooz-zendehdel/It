import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { FaTelegram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import enamad from "../assets/HomeImage/download-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="conatiner">
        <div className="footer-detail">
          <div className="footer-nav">
            <h2 style={{ color: "#fff" }}>2itman</h2>
            <Link to="/">خانه</Link>
            <Link to="/">درباره ما</Link>
            <Link to="/">تماس با ما</Link>
            <Link to="/">نمونه کار</Link>
            <Link to="/">انتقادات و پیشنهادات</Link>
          </div>
          <div className="footer-nav">
            <Link to="/">لینک ها</Link>
            <Link to="/">خدمات </Link>
            <Link to="/">راهبردها</Link>
            <Link to="/">مشتریان ما</Link>
            <Link to="/">مقالات</Link>
          </div>
          <div className="footer-nav">
            <Link to="/">فناوری ها</Link>
            <Link to="/">معرفی سخت افزار</Link>
            <Link to="/">تجهیزات شبکه</Link>
            <Link to="/">مقالات</Link>
            <h3 style={{ fontSize: "18px", color: "#fff", marginTop: "5px" }}>
              آدرس : سعادت آباد خیابان سرو غربی کوچه 23 مجتمع لاورز طبقه 14 واحد
              123
            </h3>
          </div>
          <div className="social-media">
            <div className="social-media-list">
              <a href="">
                <BsInstagram fontSize={30} />
              </a>
              <a href="">
                <FiTwitter fontSize={30} />
              </a>
              <a href="">
                <FaTelegram fontSize={30} />
              </a>
              <a href="">
                <FaLinkedinIn fontSize={30} />
              </a>
              <a href="">
                <FaWhatsapp fontSize={30} />
              </a>
            </div>
          </div>
          <div className="enamad">
            <img src={enamad} alt="" style={{ marginRight: "30px" }} />
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <p>
          تمامی حقوق مادی و معنوی سایت متعلق به شرکت{" "}
          <strong>تو ای تی من</strong> می باشد
        </p>
      </div>
    </footer>
  );
};

export default Footer;
