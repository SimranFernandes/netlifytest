import React, { Component } from "react";
import slider from "../../Assets/Image/sliderPics/Blog.jpg";
import img from "../../Assets/Image/MobileAppImagebbk.jpg";
class Vision extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      shown: false
    };
  }

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  render() {
    var shown = {
      display: this.state.shown ? "block" : "none"
    };

    var hidden = {
      display: this.state.shown ? "none" : "block"
    };
    return (
      <div>
        <div class="">
          <img src={slider} alt="Vision" className="slides" />

          <h3 className="visionHeading">ABOUT US</h3>
          <p className="para3">
            When Sheetal Maurya worked with a leading IT firm, before the idea
            of entrepreneurship struck him, eating out and having corporate
            lunches were an everyday affair. However, the quality of food,
            especially the non-vegetarian fare was always a point of contention
            for a foodie like Sheetal. He decided to set out on the
            entrepreneurial route but he carried out a long and diligent
            research to ensure that the final product was unmatched.
            <span style={shown} className="">
              The first branch of Famous Biryaniwala took shape in the bylanes
              of Kurla in the year 2012 and soon it created a name for itself
              due to impeccable quality and prompt delivery. The success of one
              branch led to the birth of another outlet in the bustling city of
              Thane in 2015. Through a select variety of traditional biryanis,
              starters and mouth-watering desserts, Famous Biryaniwala has
              become a trusted source of quality food for Corporate events,
              parties and outdoor events.
            </span>
            <button onClick={this.toggle.bind(this)} className="buttonorder1">
              Read More/Read Less
            </button>
          </p>
          <h2 style={hidden} />
        </div>

        {/* <div>
          <h3 className="visionHeading">ABOUT US</h3>

          <p className="para3">
            When Sheetal Maurya worked with a leading IT firm, before the idea
            of entrepreneurship struck him, eating out and having corporate
            lunches were an everyday affair. However, the quality of food,
            especially the non-vegetarian fare was always a point of contention
            for a foodie like Sheetal. He decided to set out on the
            entrepreneurial route but he carried out a long and diligent
            research to ensure that the final product was unmatched.
            <span className="show">
              The first branch of Famous Biryaniwala took shape in the bylanes
              of Kurla in the year 2012 and soon it created a name for itself
              due to impeccable quality and prompt delivery. The success of one
              branch led to the birth of another outlet in the bustling city of
              Thane in 2015. Through a select variety of traditional biryanis,
              starters and mouth-watering desserts, Famous Biryaniwala has
              become a trusted source of quality food for Corporate events,
              parties and outdoor events.
            </span>
          </p>
          <button>Toggle between hide() and show()</button>
        </div> */}

        <div className="row App">
          <div className="col-sm-6 App">
            Fast and Easy to Ordering fresh biryani on your finger tips
            <p className="text">
              Our biryanis may be seeped in traditional methods of preparation
              to give you a truly authentic taste, but we have ensured that our
              customers use modern methods when it comes to ordering their food
              in a jiffy. Our customers can order on the Dial-A-Biryani numbers
              provided on our interactive biryani while payment is easily
              facilitated through online payment and PayUmoney facility. A short
              order form on the website guarantees that you receive hot and
              tasty food quickly and hassle-free.
            </p>
          </div>
          <div className="col s6 ">
            <img src={img} alt="2" className="mobileApp" />
          </div>
        </div>
      </div>
    );
  }
}

export default Vision;
