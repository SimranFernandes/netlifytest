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
    marinRight: "auto"
  };
  render() {
    return (
      <div className="row App">
        <iframe
          src="http://test1.syspree.com/Contact-Form/"
          width="1010"
          height="520"
          style={this.styles}
        />
        <div className="row" id="app1">
          <div className="col-sm-12">
            <div className="col s6 App">
              Fast and Easy to Ordering fresh biryani on your finger tips
            </div>
            <div className="col s6 App">
              <img src={img} alt="2" className="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default bodyContactUs;
