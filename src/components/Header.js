export const Title = () => {
  return <h1>Restaurant Hills</h1>
}

const Header = () => (
  <div className="header">
    <Title/>
    <ul className="header_nav">
      <li>Home 🏠</li>
      <li>Contact Us 👋</li>
    </ul>
  </div>
);


export default Header;