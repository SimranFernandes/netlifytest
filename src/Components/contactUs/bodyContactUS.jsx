import React, { Component } from "react";
import contact from "../../Assets/Image/Contact_Us.jpg";
import img from "../../Assets/Image/MobileAppImagebbk.jpg";
import axios from "axios";
const API_PATH =
  "http://localhost:3000/counter-app/client/src/Components/contactUs/send_email.php";
class bodyContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneno: "",
      message: "",
      mailSent: false,
      error: null
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: "${API_PATH}",
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        });
      })
      .catch(error => this.setState({ error: error.message }));
  };

  state = {};
  style = {
    color: "black"
  };
  style1 = {
    width: 1348,
    height: 600
  };
  styles = {
    display: "table",
    marginLeft: 170,
    marinRight: "auto",
    border: "1px solid black"
  };
  render() {
    return (
      <div className="row App">
        <iframe
          src="https://uckindiesindia.in/contact/Contact-Form/"
          width="1010"
          height="540"
          className="contactFormshift"
        />
        <div className="row App">
          <div className="col-sm-6 App">
            Fast and Easy to Order fresh biryani on your finger tips
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
          <div className="col s6 App">
            <img src={img} alt="2" className="mobileApp1" />
          </div>
        </div>
      </div>
    );
  }
}

export default bodyContactUs;
