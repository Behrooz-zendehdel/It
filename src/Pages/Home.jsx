import React from "react";
import { Link } from "react-router-dom";
import { products, networkSorted, brands } from "../data/Data";

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
              {brands.map((brand) => {
                return <img src={brand.img} alt={brand.alt} key={brand.id} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="conatiner">
          <div className="section-network-sorting">
            <h1>خرید تجهیزات براساس دسته بندی </h1>
          </div>
          <div className="network-sorting">
            {networkSorted.map((networksort) => (
              <div className="network-sorted" key={networksort.id}>
                <img src={networksort.img} alt={networksort.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
