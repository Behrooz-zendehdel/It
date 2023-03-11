import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/Data";
import image1 from "../assets/HomeImage/1-1.jpg";
import image2 from "../assets/HomeImage/1-2.png";
import image3 from "../assets/HomeImage/1-3.jpg";
import image4 from "../assets/HomeImage/1-4.jpg";
import image5 from "../assets/HomeImage/1-5.jpg";
import image6 from "../assets/HomeImage/1-6.jpg";

const Home = () => {
  return (
    <main>
      <div className="Home">
        <div className="Home-section">
          <div className="Home-title">
            <h1>ارائه دهنده راهکارهای نوین خدمات شبکه ای </h1>
            <h2>طراحی و ساخت سایت های شرکتی </h2>
            <h3>مشاوره تخصصی در حوزه شبکه و راه اندازی زیرساخت </h3>
          </div>
        </div>
      </div>
      <section>
        <div className="section-products">
          <div className="list-products">
            {products
              ? products.map((product) => {
                  return (
                    <Link to={`/product/${product.id}`}>
                      <div className="products" key={product.id}>
                        <img src={product.img} alt="" />
                        <div className="product-space">
                          <h2>{product.name}</h2>
                          <span>{product.desc}</span>
                          <div className="btn-products">
                            <button>اطلاعات بیشتر &#8594;</button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })
              : null}
          </div>
        </div>
      </section>
      <section>
        <div className="conatiner">
          <div className="section-network">
            <div className="network-all">
              <div className="title-network">
                <h1> ... کل شبکه درست کار می کنه ، اگه</h1>
              </div>
              <div className="detail-network">
                <span>021-41902</span>
                <span>
                  {" "}
                  -------------------------------------------------- !درست کابل
                  کشی بشه{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="conatiner">
          <div className="section-shop-network">
            <div className="shop-network">
              <h1>خرید تجهیزات شبکه براساس برند</h1>
            </div>
            <div className="shop-logo-brand">
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
              <img src={image5} alt="" />
              <img src={image6} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
