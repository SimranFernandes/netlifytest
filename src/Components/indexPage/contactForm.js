import React, { Component } from "react";
import Form from "../indexPage/Form";
import createEnquiryForm from "../indexPage/createEnquiryForm";

class contactForm extends Component {
  state = {};

  handleSubmit(data) {
    createEnquiryForm(data);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default contactForm;
