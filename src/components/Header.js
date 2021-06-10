import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "../css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className='header__searchIcon'/>
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span>Hello, Guest</span>
          <span>Sign In</span>
        </div>
        <div className="header__option">
          <span>Returns</span>
          <span>& Orders</span>
        </div>
        <div className="header__option">
          <span>Your</span>
          <span>Prime</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
