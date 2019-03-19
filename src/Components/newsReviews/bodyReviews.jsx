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
          Mobile/Website Ordering
          <p className="text">
            Our biryanis may be seeped in traditional methods of preparation to
            give you a truly authentic taste, but we have ensured that our
            customers use modern methods when it comes to ordering their food in
            a jiffy. Our customers can order on the Dial-A-Biryani numbers
            provided on our interactive biryani while payment is easily
            facilitated through online payment and PayUmoney facility. A short
            order form on the website guarantees that you receive hot and tasty
            food quickly and hassle-free.
          </p>
        </div>
        <div className="col s6 App">
          <img src={img} alt="2" className="mobileApp" />
        </div>
      </div>
    );
  }
}

export default bodyReviews;
