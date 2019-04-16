import React, { Component } from "react";
import news from "../../Assets/Image/sliderPics/News reviews.jpg";
class homereviews extends Component {
  state = {};
  style3 = {
    marginBottom: 30
  };
  render() {
    return (
      <div class="" style={this.style3}>
        <img src={news} alt="news" className="slides" />

        <div className="row">
          <div className="col s12">
            <div className="col s6 card1">
              <p>
                <img
                  src="../../Assets/Image/Reviews/review1User.jpg"
                  className="imgreview"
                />
                &nbsp;&nbsp;OmiOnFood
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

            <div className="col s6 card1">
              <p>
                <img
                  src="../../Assets/Image/Reviews/jasmine.jpg"
                  className="imgreview"
                />
                &nbsp;&nbsp;Jasmin Qureshi
              </p>
              <p className="text5">
                RATED <span className="rating">5.0</span> ordered 2 Kg biryani
                on EID from"THE FAMOUS BIRYANI WALA" which was very delicious.
                The same taste what I had in Hyderabad.The chicken pieces were
                so well cooked and the freshness of Basmati rice with masalas.
                Also it was cooked with lot of chicken pieces. The biryani came
                in time which was to hot and with proper hygenic condition.
                Appreciate your hardwork and the finest biryani I ever had in my
                life.... Please blindly order the biryani as it is awesome
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <div className="col s6 card1">
              <p>
                <img
                  src="../../Assets/Image/Reviews/Sumatjagtap.jpg"
                  className="imgreview"
                />
                &nbsp;&nbsp;Sumit Jagtap
              </p>
              <p className="text5">
                RATED <span className="rating">4.0</span>Best Biryani which I
                have tasted in my life. Fan of this Biryaniwala, yet i have some
                issue regarding hygiene. most of the time hygiene is not proper
                and also late delivery
              </p>
            </div>

            <div className="col s6 card1">
              <p>
                <img
                  src="../../Assets/Image/Reviews/Sanika.png"
                  className="imgreview"
                />
                &nbsp;&nbsp;Sanika
              </p>
              <p className="text5">
                RATED <span className="rating">5.0</span> I ordered 3 kg
                Hyderabadi chicken biryani and the delivery was on time and also
                the taste was just amazing perfect for biryani lovers the
                chicken was well cooked and their where lots of chicken pieces
                in the biryani just loved it definitely will recommend it to
                frnds and family.......
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default homereviews;
