import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
   <footer className='Footer'>
    <div className="conatiner">
    <div className="footer-nav">
            <ul>
              <li>
                <Link to="/">خانه</Link>
                <Link to="example">نمونه کار</Link>
                <Link to="about">درباره ما</Link>
                <Link to="conatct">تماس با ما</Link>
              </li>
            </ul>
          </div>
    </div>
   </footer>
  )
}

export default Footer