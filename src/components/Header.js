import React from "react"

function Header()
{
    return (
        <div>
  <header className="header-section">
    <div className="header__info">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="header__info-left">
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
          <div className="col-lg-6 col-md-6">
            <div className="header__info-right">
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
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <div className="header__logo">
            <a href="./index.html">
              <img src="img/logo.png" />
            </a>
          </div>
        </div>
        <div className="col-lg-9 col-md-9">
          <nav className="header__menu">
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
        </div>
      </div>
      <div className="canvas__open">
        <span className="fa fa-bars" />
      </div>
    </div>
  </header>
        </div>
    );
}
export default Header;