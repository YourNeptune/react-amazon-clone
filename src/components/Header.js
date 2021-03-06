import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "../css/Header.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

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
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello, Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionShoppingCart">
            <ShoppingCartOutlinedIcon  fontSize='large'/>
            <span>0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
