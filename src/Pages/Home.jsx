import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/Data";
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
    </main>
  );
};

export default Home;
