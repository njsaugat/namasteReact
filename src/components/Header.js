import { Link } from "react-router-dom";
import TheHill from "/src/assets/images/TheHill.jpg";
export const Title = () => {
  return (
    <>
      <img src={TheHill} alt="Logo" height={80} />
      <h1>Restaurant Hills</h1>
    </>
  );
};

const Header = () => (
  <div className="header">
    <Title />
    <ul className="header_nav">
      <Link to='/'>
        <li>Home 🏠</li>
      </Link>
      <Link to='/about'>
        <li>About Us 👋</li>
      </Link>
      <Link to='/contact'>
        <li>Contact Us 👋</li>
      </Link>
    </ul>
  </div>
);

export default Header;
