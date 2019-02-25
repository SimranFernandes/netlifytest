import React, { Component } from "react";
import { form, FormGroup, Input, Label, Button } from "reactstrap";
import contacts from "../indexPage/contactForm.js";
class Form extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobileno: "",
      message: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMobileNoChange = this.handleMobileNoChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMessageChange(e) {
    this.setState({
      message: e.target.value
    });
  }
  handleMobileNoChange(e) {
    this.setState({
      mobileno: e.target.value
    });
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div>
        <form
          className="container"
          name="enquiry_form"
          onSubmit={this.handleSubmit}
        >
          <div className="row">
            <div className="col-sm-4">
              <FormGroup>
                <Label for="name">Name:</Label>
                <Input
                  type="text"
                  name="name"
                  id="enquiry_form_name"
                  required="required"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </FormGroup>
            </div>
            <div className="col-sm-4">
              <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  id="enquiry_form_email"
                  required="required"
                />
              </FormGroup>
            </div>
            <div className="col-sm-4">
              <FormGroup>
                <Label for="mobileno">Phone No:</Label>
                <Input
                  type="tel"
                  name="mobileno"
                  value={this.state.mobileno}
                  onChange={this.handleMobileNoChange}
                  id="enquiry_form_mobileno"
                  required="required"
                />
              </FormGroup>
            </div>
          </div>
          <FormGroup>
            <Label for="message">Message:</Label>
            <Input
              type="textarea"
              className="control1"
              id="enquiry_form_message"
              value={this.state.message}
              onChange={this.handleMessageChange}
              required="required"
            />
          </FormGroup>

          <Button type="submit" id="enquiry_form_submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
