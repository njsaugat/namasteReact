import { Link } from "react-router-dom";
import TheHill from "/src/assets/images/TheHill.jpg";
import useOnline from "../hooks/useOnline";
import { useEffect, useState, useContext } from "react";
import UserContext from "../utils/UserContext";
// import {  useSelector } from "react-redux/es/hooks/useSelector";
import { useSelector } from "react-redux";

export const Title = () => {
  return (
    <>
      <Link to="/">
        <img data-testid="logo" src={TheHill} alt="Logo" height={80} />
      </Link>
      <h1>Restaurant Hills</h1>
    </>
  );
};

const Header = () => {
  const { user } = useContext(UserContext);
  const isOnline = useOnline();
  const cartItemsCount = useSelector((store) => store.cart.count);

  return (
    <div className="header">
      <Title />
      <ul className="header_nav">
        {user.name}
        <Link to="/">
          <li data-testid="home">Home 🏠</li>
        </Link>
        <Link to="/about">
          <li data-testid="about">About Us 👋</li>
        </Link>
        <Link to="/contact">
          <li data-testid="contact">Contact Us 👋</li>
        </Link>
        <Link to="/insta-mart">
          <li>Insta Mart</li>
        </Link>
        <Link to="/cart" data-testid="cart-items">
          <li>Cart {cartItemsCount}</li>
        </Link>
        {/* {item} */}
        <span data-testid="online-status">{isOnline ? "🟢" : "🔴"}</span>
      </ul>
    </div>
  );
};

export default Header;
