import "../styles/navbar.css";
import logo from "../images/house.png";

export default function Navbar() {
  return (
    <>
      <div id="navbar">
        <div id="icon">
          <img id="logo" src={logo} alt="" />
          <p>STAY</p>
        </div>
        <div id="menu">
          <ul id="List">
            <li className="menuList">HOME</li>
            <li className="menuList">SERVICES</li>
            <li className="menuList">BLOG</li>
            <li className="menuList">ABOUT</li>
            <li className="menuList">CONTACTS</li>
            <li className="aws"></li>
          </ul>
        </div>
      </div>
    </>
  );
}
