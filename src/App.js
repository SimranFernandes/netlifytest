import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-materialize";
import "./App.css";
import "jquery/dist/jquery";
import {
  BrowserRouter,
  Route,
  Switch,
  Router,
  IndexRoute
} from "react-router-dom";
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
          <Route path="/" component={Index} />
          <Route path="Vision" component={Vision} />
          <Route path="Catering" component={Catering} />
          <Route path="Menu" component={Menu} />
          <Route path="sponsor-biryani" component={Sponsor} />
          <Route path="News" component={NewsReviews} />
          <Route path="ContactUs" component={ContactUs} />
          <Route path="Order" component={OrderOnline} />
          <Route path="Order-online/menu" component={cart} />
          <Route path="Blog" component={Blog} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
