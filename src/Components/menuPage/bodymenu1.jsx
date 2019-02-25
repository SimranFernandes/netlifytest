import React, { Component } from "react";
import img from "../../Assets/Image/MobileAppImagebbk.jpg";
class bodymenu1 extends Component {
  state = {};
  style = {
    marginTop: 40
  };

  style1 = {
    marginLeft: 90
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

export default bodymenu1;
