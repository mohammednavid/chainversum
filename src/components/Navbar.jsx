import { useState } from "react";
import "../assets/styles/Navbar.scss";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="nav">
      <div className="nav_left">
        <img src="/logo.svg" alt="" className="nav_logo" />
      </div>
      {menu ? (
        <i className="bi bi-x" onClick={() => setMenu(false)}></i>
      ) : (
        <i className="bi bi-list" onClick={() => setMenu(true)}></i>
      )}
      <ul className={`nav_right ${menu && "menu_open"}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Roadmap</li>
        <li>Statistics</li>
        <li>Token</li>
        <li>Whitepaper</li>
        <li>Team</li>
        <li>FAQ</li>
        <li className="nav_button">SIGN UP</li>
      </ul>
    </nav>
  );
};

export default Navbar;
