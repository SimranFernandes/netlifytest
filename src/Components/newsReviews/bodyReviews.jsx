import React, { Component } from "react";
import imgs from "../../Assets/Image/MobileAppImagebbk.png";
import img from "../../Assets/Image/MobileAppImagebbk.jpg";
class bodyReviews extends Component {
  state = {};
  style = {
    color: "black"
  };
  render() {
    return (
      <div className="row App">
        <div className="col-sm-6 App">
          Fast and Easy to Ordering fresh biryani on your finger tips
        </div>
        <div className="col s6 App">
          <img src={img} alt="2" className="" />
        </div>
      </div>
    );
  }
}

export default bodyReviews;
