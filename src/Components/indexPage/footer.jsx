import React, { Component } from "react";
import facebook from "../../Assets/Image/fb.png";
import instagram from "../../Assets/Image/instagram.png";
import twitter from "../../Assets/Image/twitter.png";
import google from "../../Assets/Image/google.png";
import icon from "../../Assets/Image/quality-icon.png";
import icon1 from "../../Assets/Image/Quantity.png";
import icon2 from "../../Assets/Image/taste.png";
import Axios from "axios";
import ContactForm from "../indexPage/contactForm.js";
import seperator from "../../Assets/Image/dividerTop.svg";
import layers from "../../Assets/Image/ChickenBiryani/ChickenKeemaBiryani.jpg";
import placeholder from "../../Assets/Image/Placeholder640x360.png";
class Footer extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;

    // const form=await Axios.post('/api/form',{
    //  name,
    //  email,
    //  message

    // })
  }

  style = {
    border: "solid 1px white",
    height: 300,
    width: 400,
    paddingLeft: 50
  };

  style2 = {
    paddingBottom: 20,
    paddingTop: 20,
    textAlign: "center"
  };
  style11 = {
    paddingBottom: 20,
    paddingTop: 20,
    textAlign: "left"
  };
  style10 = {
    width: 480,
    height: 294
  };
  style9 = {
    paddingTop: 120
  };
  style3 = {
    width: 1010,
    height: 520,
    frameBorder: 0,
    marginLeft: 100,
    marginBottom: 50
  };

  style4 = {
    width: 100,
    height: 100
  };
  style5 = {
    width: 120,
    height: 120
  };
  style6 = {
    width: 250
  };

  style8 = {
    width: 250,
    paddingBottom: 30
  };
  style7 = {
    margintTop: 80,
    margintBottom: 80
  };
  render() {
    return (
      <div>
        <div className="row footerindex layer">
          <div className="col-sm-12">
            <div className="col s6 imgswipe txtblock">
              <img
                src={layers}
                alt="Norway"
                className=""
                style={this.style10}
              />

              <p className="top-rights" style={this.style11}>
                <h3 className="">Why Famous Biryani ??</h3>
                Biryani was introduced by the Mughal Emperors, as a complete
                food for their garrison on the move under hard conditions and
                the method of preparation wasrather peculiar. The rice, meat &
                spices wrapped in leaves were put in a shallow pit dig for
                cooking and the pit was then covered with earth with a campfire
                litover it.
              </p>
            </div>

            <div className="col s6 imgswipe txtblock">
              <img
                src={placeholder}
                alt="Norway"
                className=""
                style={this.style10}
              />

              <p className="top-rights" style={this.style2}>
                <h3 className="">Our Team</h3>
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="heading product">Our Promise</h3>

              <div className="col s4">
                <h3 className="heading">Quality</h3>
                <img
                  src={icon}
                  alt="quality"
                  className=""
                  style={this.style5}
                />
                <h4 className="text" style={this.style2}>
                  <p className="text">
                    We never compromise on the Quality of our ingredients. Ever!
                  </p>
                </h4>
              </div>

              <div className="col s4">
                <h3 className="heading">Taste</h3>
                <img src={icon2} style={this.style4} alt="taste" />
                <h4 className="text" style={this.style2}>
                  <p>
                    Our Khansamas cook the Biryanis in a traditional style with
                    authentic, carefully-selected ingredients.
                  </p>
                </h4>
              </div>

              <div className="col s4">
                <h3 className="heading">Quantity</h3>
                <img src={icon1} style={this.style4} alt="quantity" />
                <h4 className="text" style={this.style2}>
                  <p className="">
                    We make sure our customers never fall short of food. That’s
                    our commitment!
                  </p>
                </h4>
              </div>
            </div>
          </div>

          <div className="row m-6" style={this.style7}>
            <div className="col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5862026300806!2d72.9799594139323!3d19.21326765263843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e6f596c7a3%3A0x5c44cd964cd01ccd!2sFamous+Biryaniwala!5e0!3m2!1sen!2sin!4v1538044119256"
                style={this.style3}
                allowFullScreen
              />
            </div>
          </div>

          <iframe
            src="http://test1.syspree.com/Contact-Form/"
            width="1000"
            style={this.style3}
          />
        </div>
      </div>
    );
  }
}

export default Footer;
