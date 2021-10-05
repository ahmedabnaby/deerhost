import React from "react"

function Sidebar()
{
    return (
        <div>
              <div className="offcanvas__menu__overlay" />
  <div className="offcanvas__menu__wrapper">
    <div className="canvas__close">
      <span className="fa fa-times-circle-o" />
    </div>
    <div className="offcanvas__logo">
      <a href="#">
        <img src="img/logo.png" />
      </a>
    </div>
    <nav className="offcanvas__menu mobile-menu">
      <ul>
        <li className="active">
          <a href="./index.html">Home</a>
        </li>
        <li>
          <a href="./about.html">About</a>
        </li>
        <li>
          <a href="./hosting.html">Hosting</a>
        </li>
        <li>
          <a href="#">Pages</a>
          <ul className="dropdown">
            <li>
              <a href="./pricing.html">Pricing</a>
            </li>
            <li>
              <a href="./blog-details.html">Blog Details</a>
            </li>
            <li>
              <a href="./404.html">404</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="./blog.html">News</a>
        </li>
        <li>
          <a href="./contact.html">Contact</a>
        </li>
      </ul>
    </nav>
    <div id="mobile-menu-wrap" />
    <div className="offcanvas__auth">
      <ul>
        <li>
          <a href="#">
            <span className="icon_chat_alt" /> Live chat
          </a>
        </li>
        <li>
          <a href="#">
            <span className="fa fa-user" /> Login / Register
          </a>
        </li>
      </ul>
    </div>
    <div className="offcanvas__info">
      <ul>
        <li>
          <span className="icon_phone" /> +1 123-456-7890
        </li>
        <li>
          <span className="fa fa-envelope" /> Support@gmail.com
        </li>
      </ul>
    </div>
  </div>
        </div>
    );
}
export default Sidebar;