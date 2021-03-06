import React, { Component } from "react";
import facebook from "../../Assets/Image/fb.png";
import instagram from "../../Assets/Image/instagram.png";
import twitter from "../../Assets/Image/twitter.png";
import google from "../../Assets/Image/google.png";
import icon from "../../Assets/Image/quality-icon-06.png";
import icon1 from "../../Assets/Image/Quantity (2).png";
import icon2 from "../../Assets/Image/01-06.png";
import Axios from "axios";
import ContactForm from "../indexPage/contactForm.js";
import seperator from "../../Assets/Image/dividerTop.svg";
import layers from "../../Assets/Image/ChickenBiryani/Chicken-Malai-seekh-Biryani.jpg";
import placeholder from "../../Assets/Image/Placeholder640x360.png";
class Footer extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
      shown: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
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
  style7 = {
    paddingRight: 40
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
    height: 388
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
  style12 = {
    marginLeft: 120
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
    var shown = {
      display: this.state.shown ? "block" : "none"
    };

    var hidden = {
      display: this.state.shown ? "none" : "block"
    };
    return (
      <div className="">
        <div className="row footerindex">
          <div className="col-sm-12">
            <div className="col s6 imgswipe">
              <p className="top-lefts" style={this.style11}>
                <h3 className="">Why Famous Biryaniwala ??</h3>
                <p className="justify">
                  We at Famous Biryaniwala always ensure that the authentic and
                  time-tested method of biryani preparation comes alive in every
                  spoonful and the original flavours of traditional cooking are
                  always retained. It is for this reason that the biryanis is
                  cooked over coal stoves which leaves that unmistakable taste
                  and flavour behind. Every single ingredient used is fresh and
                  no frozen food is used.
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className="row container mobileview1" style={this.style12}>
          <div className="col-sm-12">
            <h3 className="heading product">Our Promise</h3>

            <div className="col s4" style={this.style7}>
              <h3 className="heading">Quality</h3>
              <img
                src={icon}
                alt="quality"
                className="icon-resize"
                style={this.style5}
              />
              <h4 className="text" style={this.style2}>
                <p className="text">
                  We never compromise on the Quality of our ingredients. Ever!
                </p>
              </h4>
            </div>

            <div className="col s4" style={this.style7}>
              <h3 className="heading">Quantity</h3>
              <img src={icon1} style={this.style5} alt="quantity" />
              <h4 className="text" style={this.style2}>
                <p className="text">
                  We make sure our customers never fall short of food. That’s
                  our commitment!
                </p>
              </h4>
            </div>

            <div className="col s4" style={this.style7}>
              <h3 className="heading">Taste</h3>
              <img src={icon2} style={this.style5} alt="taste" />
              <h4 className="text" style={this.style2}>
                <p className="text">
                  Our Khansamas cook the Biryanis in a traditional style with
                  authentic, carefully-selected ingredients.
                </p>
              </h4>
            </div>
          </div>
        </div>

        <div className="row container mobileview">
          <div className="col-sm-12">
            <h3 className="heading product">Our Promise</h3>

            <div className="col s12" style={this.style7}>
              <h3 className="heading">Quality</h3>
              <img
                src={icon}
                alt="quality"
                className="icon-resize"
                style={this.style5}
              />
              <h4 className="text" style={this.style2}>
                <p className="text">
                  We never compromise on the Quality of our ingredients. Ever!
                </p>
              </h4>
            </div>

            <div className="col s12" style={this.style7}>
              <h3 className="heading">Quantity</h3>
              <img src={icon1} style={this.style5} alt="quantity" />
              <h4 className="text" style={this.style2}>
                <p className="text">
                  We make sure our customers never fall short of food. That’s
                  our commitment!
                </p>
              </h4>
            </div>

            <div className="col s12" style={this.style7}>
              <h3 className="heading">Taste</h3>
              <img src={icon2} style={this.style5} alt="taste" />
              <h4 className="text" style={this.style2}>
                <p className="text">
                  Our Khansamas cook the Biryanis in a traditional style with
                  authentic, carefully-selected ingredients.
                </p>
              </h4>
            </div>
          </div>
        </div>

        <div className="" style={this.style7}>
          <div className="col-sm-10 container pad">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5862026300806!2d72.9799594139323!3d19.21326765263843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e6f596c7a3%3A0x5c44cd964cd01ccd!2sFamous+Biryaniwala!5e0!3m2!1sen!2sin!4v1538044119256"
              className="location"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
