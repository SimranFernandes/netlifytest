import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Q from "q";
import axios from "axios";
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class Header extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      picture: [],
      value: "select"
    };
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  style1 = {
    width: 350,
    height: 200
  };

  style3 = {
    width: 370,
    height: 400,
    marginRight: 30
  };

  style2 = {
    textAlign: "center",
    fontSize: 16
  };
  componentDidMount() {
    const deferred = Q.defer();
    var url = "http://localhost:59817/api/Product/manage";
    axios
      .request({
        url: url,
        method: "GET",
        mode: "no-cors",
        crossDomain: true,
        headers: {
          Authorization:
            "Bearer bM74PfBBowiWE20b_QUpoUXDWLZDIWMuQ8_EoeqQAPEzlW9BVW-2aJn2XTQx4XKPOgmSMpAx9feIbEbOMEiMFWh39dwD8JPjXuT33pcthmcruh58ey8Er9WDIHO3EH3KVUJUUnLiG3nh2JsdyQ0AJNxGFEgZZM0ICEpWPpnnDcUde5-jClnw4EcAg1erKEk1h-QWyG274snTx1RoM6t1FLBIOK4ZUt8cRh9oMg6GBZnWbWKXUF5sLM4U4S1oeMySK7vKrcZfBMF0KTHIi5ol3JAievRuPGE29i7nbtNJDYele5bn5y0ZQZGemCvA3ROwMq1QMWTNxB0SBGEQA34Nf4exBBfN4emm_WvXgfO_7N6ti2CEVuZUgXmW3uyrbY6fzVI8gUhFKDg7M4BqKF1YW3oNQcfuAxM-M14cX7-m2xOdulsdc3oCh_v-8a87k-BTAKLdQ1lUgDYdtBCQThoHxQsCykLdtLV8uZkoofo5p_3B0ouymwHFx5NEiOx053v5v_JfzPmw9eX8wm_R_NSmBA",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(results => {
        this.setState({
          pictures: results.data
        });
      })
      .catch(error => {
        console.log(error);
      });
    return deferred.promise;
  }

  state = {
    value: 0
  };

  style = {
    width: 280,
    height: 280
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className="">
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable
              scrollButtons="auto"
            >
              <Tab label="Biryani" icon={<PhoneIcon />} />
              <Tab label="Starter" icon={<FavoriteIcon />} value={3} />
              <Tab label="Main Cource" icon={<PersonPinIcon />} value={4} />
              <Tab label="Mutton Biryani" icon={<HelpIcon />} />
              <Tab label="Egg Biryani" icon={<ShoppingBasket />} />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabContainer>
              <Tabs
                value={value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                scrollable
                scrollButtons="auto"
              >
                <Tab label="Chciken Biryani" icon={<PhoneIcon />} value={0} />
                <Tab label="Fish Biryani" icon={<FavoriteIcon />} value={1} />
                <Tab label="Veg Biryani" icon={<PersonPinIcon />} value={2} />
                <Tab label="Mutton Biryani" icon={<HelpIcon />} />
                <Tab label="Egg Biryani" icon={<ShoppingBasket />} />
              </Tabs>
              <div className="row">
                <div className="col m12 s12">
                  <div className="fContainer">
                    <div className="s12 m4">
                      <div className="header1">Chicken Biryani</div>
                      {this.state.pictures.map(p => {
                        return (
                          <div>
                            {p.SubCategoryName == "Chicken Biryani" ? (
                              <div
                                key={p.Product_Id}
                                className="col s12 m4 card"
                              >
                                <p>
                                  <img
                                    src={
                                      "http://localhost:59817" + p.LogoImageUrl
                                    }
                                    className="imgsize"
                                  />
                                </p>
                                <p className="text heading">{p.ProductName}</p>
                                <div className="form-group dropborder2">
                                  <label htmlFor="select2">Select Amount</label>
                                  <select
                                    value={this.state.value}
                                    onChange={this.onChange.bind(this)}
                                    className="form-control"
                                  >
                                    {this.state.pictures.map(option => {
                                      return (
                                        <option value={option} key={option}>
                                          {option.Amount}
                                          {"\n" + option.Amount * 3}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              <Tabs
                value={value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                scrollable
                scrollButtons="auto"
              >
                <Tab label="Chciken Biryani" icon={<PhoneIcon />} value={0} />
                <Tab label="Fish Biryani" icon={<FavoriteIcon />} value={1} />
                <Tab label="Veg Biryani" icon={<PersonPinIcon />} value={2} />
                <Tab label="Mutton Biryani" icon={<HelpIcon />} />
                <Tab label="Egg Biryani" icon={<ShoppingBasket />} />
              </Tabs>
              <div className="row">
                <div className="col m12 s12">
                  <div className="fContainer">
                    <div className="s12 m4">
                      <div className="header1">Fish Biryani</div>
                      {this.state.pictures.map(p => {
                        return (
                          <div>
                            {p.SubCategoryName == "Fish Biryani" ? (
                              <div
                                key={p.Product_Id}
                                className="col s12 m4 card"
                              >
                                <p>
                                  {" "}
                                  <img
                                    src={
                                      "http://localhost:59817" + p.LogoImageUrl
                                    }
                                    className="imgsize"
                                  />
                                </p>
                                <p className="text heading">{p.ProductName}</p>
                                <div className="form-group dropborder2">
                                  <label htmlFor="select2">Select Amount</label>
                                  <select
                                    value={this.state.value}
                                    onChange={this.onChange.bind(this)}
                                    className="form-control"
                                  >
                                    {this.state.pictures.map(option => {
                                      return (
                                        <option value={option} key={option}>
                                          {option.Amount}
                                          {"\n" + option.Amount * 3}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </TabContainer>
          )}
          {value === 2 && (
            <TabContainer>
              <Tabs
                value={value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                scrollable
                scrollButtons="auto"
              >
                <Tab label="Chciken Biryani" icon={<PhoneIcon />} value={0} />
                <Tab label="Fish Biryani" icon={<FavoriteIcon />} value={1} />
                <Tab label="Veg Biryani" icon={<PersonPinIcon />} value={2} />
                <Tab label="Mutton Biryani" icon={<HelpIcon />} />
                <Tab label="Egg Biryani" icon={<ShoppingBasket />} />
              </Tabs>
              <div className="row">
                <div className="col m12 s12">
                  <div className="fContainer">
                    <div className="s12 m4">
                      <div className="header1">Veg Biryani</div>
                      {this.state.pictures.map(p => {
                        return (
                          <div>
                            {p.SubCategoryName == "Veg Biryani" ? (
                              <div
                                key={p.Product_Id}
                                className="col s12 m4 card"
                              >
                                <p>
                                  {" "}
                                  <img
                                    src={
                                      "http://localhost:59817" + p.LogoImageUrl
                                    }
                                    className="imgsize"
                                  />
                                </p>
                                <p className="text heading">{p.ProductName}</p>
                                <div className="form-group dropborder2">
                                  <label htmlFor="select2">Select Amount</label>
                                  <select
                                    value={this.state.value}
                                    onChange={this.onChange.bind(this)}
                                    className="form-control"
                                  >
                                    {this.state.pictures.map(option => {
                                      return (
                                        <option value={option} key={option}>
                                          {option.Amount}
                                          {"\n" + option.Amount * 3}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </TabContainer>
          )}
          {value === 3 && <TabContainer>Item Four</TabContainer>}
          {value === 4 && <TabContainer>Item Five</TabContainer>}
          {value === 5 && <TabContainer>Item Six</TabContainer>}
          {value === 6 && <TabContainer>Item Seven</TabContainer>}
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Header);
