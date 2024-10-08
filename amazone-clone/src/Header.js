import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

import { Link } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';








function Header() {
  return (
    <div className="header">
     <Link to="/">
        <img
          className="header__Logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazone logo"
          />

     </Link>

          <div className="header__search">

            <input
            className="header__searchInput"
            type= "text"/>
            <SearchIcon
            className="header__searchicon"/>
           

        
          </div>

        <div className="header__nav">
          <div className='header__option'>
            <span className='header__optionLineOne'>
              Hello Guest
            </span>

            <span className='header__optionLineTwo'>
              Sign In
            </span>


          </div>

          <div className='header__option'>
          <span className='header__optionLineOne'>
             Returns
            </span>

            <span className='header__optionLineTwo'>
             and Orders
            </span>
 
            
          </div>

          <div className='header__option'>
          <span className='header__optionLineOne'>
              your
            </span>

            <span className='header__optionLineTwo'>
              Prime
            </span>

          </div>

          <Link to="/checkout">
            <div className="header__optionBasket">
            <AddShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">0</span>
            </div>
          </Link>
         
        </div>

         
    </div>
  )
}

export default Header


