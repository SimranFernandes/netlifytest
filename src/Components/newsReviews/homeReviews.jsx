import React, { Component } from "react";
import news from "../../Assets/Image/sliderPics/News reviews.jpg";
class homereviews extends Component {
  state = {};

  render() {
    return (
      <div>
        <img src={news} alt="news" className="slides" />

        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-6 card ">
              <p>
                <img
                  src="../../Assets/Image/Reviews/review1User.jpg"
                  className="imgreview"
                />
                &nbsp;OmiOnFood
              </p>
              <p className="text5">
                RATED <span className="rating">5.0</span>When you want to bulk
                order biryani, multiple people suggest multiple options and
                internet is flooded with the advertisements. So was the case
                when I had to bulk order for small house party. There were many
                caterers and suggestions from Thane area. While searching the
                internet, "Famous Biryaniwala" caterers came to my notice. The
                reviews were good and the prices reasonable. I gave them a call
                at night for order of 1.5 kg of boneless chicken Tikka biryani
                for next day. The person on call said that even a call in
                morning would do for late evening order.
              </p>
            </div>

            <div className="col-sm-6 card" />
          </div>
        </div>
      </div>
    );
  }
}

export default homereviews;
