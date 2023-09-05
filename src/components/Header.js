import { Link } from "react-router-dom";
import TheHill from "/src/assets/images/TheHill.jpg";
import useOnline from "../hooks/useOnline";
import { useEffect, useState } from "react";
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
  const isOnline = useOnline();
  // let [item,setItem]=useState(null);
  // useEffect(() => {
  //   localStorage.setItem('isOnline',isOnline)
  //   setItem(localStorage.getItem('isOnline'));
  // },[isOnline])

  return (
    <div className="header">
      <Title />
      <ul className="header_nav">
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
        {/* {item} */}
        {isOnline ? "🟢" : "🔴"}
      </ul>
    </div>
  );
};

export default Header;
