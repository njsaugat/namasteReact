import { Link } from "react-router-dom";
import TheHill from "/src/assets/images/TheHill.jpg";
import useOnline from "../hooks/useOnline";
import { useEffect, useState, useContext } from "react";
import UserContext from "../utils/UserContext";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

export const Title = () => {
  return (
    <>
      <Link to="/">
        <img src={TheHill} alt="Logo" height={80} />
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
          <li>Home 🏠</li>
        </Link>
        <Link to="/about">
          <li>About Us 👋</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us 👋</li>
        </Link>
        <Link to="/insta-mart">
          <li>Insta Mart</li>
        </Link>
        <Link to="/cart">
          <li>Cart {cartItemsCount}</li>
        </Link>
        {/* {item} */}
        {isOnline ? "🟢" : "🔴"}
      </ul>
    </div>
  );
};

export default Header;
