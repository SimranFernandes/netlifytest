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
    width: "100%",
    borderBottom: "2 solid white"
  };

  render() {
    return (
      <header className="">
        <ul id="dropdown1" className="dropdown-content background">
          <li>
            <a href="">one</a>
          </li>
          <li>
            <a href="">two</a>
          </li>
          <li className="divider" />
          <li>
            <a href="">three</a>
          </li>
        </ul>
        <nav style={this.style}>
          <div className="nav-wrapper">
            <a href="/">
              <img src={imgLogo} height="150px" className="blend" alt="Logo" />
            </a>

            <ul className="left hide-on-med-and-down">
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
                  Sponsor Biryani
                </a>
              </li>

              <li>
                <a href="/News" className="heading1">
                  News|Reviews
                </a>
              </li>
              <li>
                <a
                  href="http://syspree.com/wp49/blog-page/"
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
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
