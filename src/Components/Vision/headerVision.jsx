import React, { Component } from "react";
import slider from "../../Assets/Image/sliderPics/Blog.jpg";
import img from "../../Assets/Image/MobileAppImagebbk.jpg";
class Vision extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src={slider} alt="Vision" className="slides" />

        <div>
          <h3 className="visionHeading">ABOUT US</h3>

          <p className="para3">
            Famous Biryaniwala is a Catering Company in Mumbai that servers 15
            Types of Tradition Biryani for Corporate Events, Party, Festivals &
            Picnics. Founded in 2012 by Sheetal Maurya, Famous Biryaniwala
            provides a variety of fresh Biryani in unique, hassle-free packaging
            throughout out Mumbai, Navi-Mumbai & Thane region.
          </p>
        </div>

        <div className="row App">
          <div className="col-sm-6 App">
            Fast and Easy to Ordering fresh biryani on your finger tips
          </div>
          <div className="col s6 App">
            <img src={img} alt="2" className="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Vision;
