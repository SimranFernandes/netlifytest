import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-materialize";
import "./App.css";
import "jquery/dist/jquery";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/newsReviews/homeReviews";
import Body from "./Components/cateringPage/bodyCatering";
import Footer from "./Components/menuPage/footermenu";
import "axios/dist/axios";
import Index from "./Components/indexPage/indexPage";
import Catering from "./Components/cateringPage/cateringPage";
import NewsReviews from "./Components/newsReviews/newsReviews";
import ContactUs from "./Components/contactUs/contactUsPage";
import cart from "./Components/cartPage/header";
import Sponsor from "./Components/SponsorBiryani/SponsorBiryani";
import OrderOnline from "./Components/orderPage/headerPage";
import Menu from "./Components/menuPage/menuPage";
import Vision from "./Components/Vision/Vision";
import Blog from "./Components/Blog/BlogPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/Vision" exact component={Vision} />
          <Route path="/Catering" exact component={Catering} />
          <Route path="/Menu" exact component={Menu} />
          <Route path="/sponsor-biryani" exact component={Sponsor} />
          <Route path="/News" exact component={NewsReviews} />
          <Route path="/ContactUs" exact component={ContactUs} />
          <Route path="/Order" exact component={OrderOnline} />
          <Route path="/Order-online/menu" exact component={cart} />
          <Route path="/Blog" exact component={Blog} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
