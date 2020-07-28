import React from 'react'
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";

function Header() {

  // basket is a distruction of state [state, dispatch] => [{basket}, dispatch]
  const [{basket, user}, dispatch] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <nav className="header">
      <Link to="/home">
        <img
          className="header__logo"
          src="https://cdn.clipart.email/3c8f8f66c9df89785dbbcccc76c91cab_online-free-logo-maker-e-commerce-cart-logo-maker_450-387.png"
        ></img>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        {/* first link */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
  <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Points</span>
          </div>
        </Link>
        {/* Checkout icon */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header
