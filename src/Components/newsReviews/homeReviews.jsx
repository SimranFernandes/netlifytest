import React, { Component } from "react";
import news from "../../Assets/Image/sliderPics/News reviews.jpg";
class homereviews extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src={news} alt="news" className="slides" />
      </div>
    );
  }
}

export default homereviews;
