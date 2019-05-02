import React, { Component } from "react";
import { Button } from "reactstrap";
import imgLogo from "../../Assets/Image/Logo.png";
class Header extends Component {
  state = {
    imageUrl: "http://famousbiryaniwala.com/images/biryanilogo.png",
    imageUrl1:
      "https://i.ndtvimg.com/i/2017-10/calikut-biryani-recipe_620x330_51507791719.jpg",
    imageUrl2:
      "http://www.reach2biz.com/wp-content/uploads/MCC-LED-Sliders3-230x230.jpg"
  };

  style = {
    backgroundColor: "black",
    height: 90,
    padding: "0 10px",
    width: "113%",
    borderBottom: "2 solid white"
  };

  style6 = {
    /* right: 32px; */
    float: "right",
    right: 38
  };

  render() {
    return (
      <header className="">
        <nav style={this.style} className="">
          <div className="nav-wrapper">
            <a
              href="#"
              className="sidenav-trigger menu-mobile"
              data-target="mobile-nav"
            >
              <i className="material-icons">menu</i>
            </a>
            <a href="/">
              <img src={imgLogo} height="150px" className="blend" alt="Logo" />
            </a>

            <ul className="left hide-on-med-and-down">
              <li>
                <a href="/" className="heading1">
                  Home
                </a>
              </li>

              <li>
                <a href="/Vision" className="heading1">
                  Our Vision
                </a>
              </li>

              <li>
                <a href="/Menu" className="heading1">
                  Menu
                </a>
              </li>
              <li>
                <a href="/Catering" className="heading1">
                  Catering
                </a>
              </li>

              <li>
                <a href="/sponsor-biryani" className="heading1">
                  Sponsor a Biryani
                </a>
              </li>

              <li>
                <a href="/News" className="heading1">
                  News|Reviews
                </a>
              </li>
              <li>
                <a
                  href="http://form.syspreesolutions.com/blog-page/"
                  className="heading1"
                >
                  Blog Page
                </a>
              </li>

              <li>
                <a href="/ContactUs" className="heading1">
                  Contact Us
                </a>
              </li>
            </ul>
            <img src="../Assets/Image/halal.png" className="halal" />
          </div>
        </nav>

        <ul className="sidenav" id="mobile-nav">
          <li>
            <a href="/" className="heading1">
              Home
            </a>
          </li>

          <li>
            <a href="/Vision" className="">
              Our Vision
            </a>
          </li>

          <li>
            <a href="/Menu" className="">
              Menu
            </a>
          </li>
          <li>
            <a href="/Catering" className="">
              Catering
            </a>
          </li>

          <li>
            <a href="/sponsor-biryani" className="">
              Sponsor a Biryani
            </a>
          </li>

          <li>
            <a href="/News" className="">
              News|Reviews
            </a>
          </li>
          <li>
            <a href="http://form.syspreesolutions.com/blog-page/" className="">
              Blog Page
            </a>
          </li>

          <li>
            <a href="/ContactUs" className="">
              Contact Us
            </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
