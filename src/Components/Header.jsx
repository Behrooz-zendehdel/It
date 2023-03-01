import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="Header">
      <div className="conatiner">
        <div className="section-header">
          <div className="header-logo">
            <Link to="/">2ItMan</Link>
          </div>
          <div className="header-nav">
            <ul>
              <li>
                <Link to="/">خانه </Link>
                <Link to="example">نمونه کار</Link>
                <Link to="about">درباره ما</Link>
                <Link to="conatct">تماس با ما</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
