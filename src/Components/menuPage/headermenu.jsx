import React, { Component } from "react";
import slide1 from "../../Assets/Image/sliderPics/4.jpg";
import axios from "axios";
import Q from "q";
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
import slider4 from "../../Assets/Image/sliderPics/Final slider banner 02.jpg";
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

class headermenu extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      picture: [],
      value: 0
    };
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  style1 = {
    paddingBottom: 20
  };

  style5 = {
    paddingTop: 30
  };
  style2 = {
    paddingLeft: 80
  };
  st;
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
            "Bearer  ymzWQMbMKmc7VM574Pl7rIzMIvCbXEaoqsX5BRBaFqS6xaMr1DWlCXRUYtNrBulbJsi6IZu7HM5m-vdYfTbWy_4Yq_UvSSuY1n1qd2A5PwPh19duOqTdvrctC-7Z3ncb1Mt17E0N7YYKi3ReYHrTI_f9JsXjwOjwBWp9HMKXu4xwvPBujeGtqwVP2dtsO0G7zKrfmHH95kx0Nk0PkPusCfq_FjRQ1qzIxheeF0tuS1QeIo75VLwNnb42bbNikXN-7lH3ol0-68rPJ7gs5X_mLP40Wl57cnrTJfSZQmdqvJ9hGQ1O_D0XSZvFs5LM6SGUCxyfoOFPdAdw3O4zynpCOr8q0e4Z4tIfLyOUS19QLsl_OgaYgROfcOk7VpJBFbUu282Bp4-evWLtTcPdtzaY3G3r8gc7t0yFHtRwH8weljKYFTu4muwSjC4CiV6Yzxg-zS4w_a-K4DWmsXxiaSFAv9w7BH_g78SY6NOxw19DvgqF49vCYcw3_kdTyJSSGFcspT-CfdJ51f_Hs6l9F7oIiQ",
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
  style5 = {
    paddingBottom: 30
  };
  style3 = {
    paddingLeft: 31
  };
  style4 = {
    borderColor: "1px solid white"
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className="background">
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              className="background"
              scrollable
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Biryani" className="" />
              <Tab label="Starter" value={5} className="" />
              <Tab label="Main Cource" value={7} className="solidTab" />
              <Tab label="Desserts" className="solidTab" value={11} />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabContainer>
              <Tabs
                value={value}
                onChange={this.handleChange}
                className="background"
                scrollable
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Chicken Biryani" value={0} className="" />
                <Tab label="Fish Biryani" value={1} className="" />
                <Tab label="Veg Biryani" value={2} className="" />
                <Tab label="Mutton Biryani" value={3} className="" />
                <Tab label="Egg Biryani" className="" />
              </Tabs>
              <div className="heading" style={this.style5}>
                Chicken Biryani
              </div>
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading3">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading3">Per Kg</h3>
                    </div>
                    <div className="col m4 s4">
                      <div className="heading3">Per 3kg</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2" style={this.style5}>
                      Chicken Dum Biryani
                    </div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2">2250</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Lucknowi Biryani
                    </div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2">2250</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken 65 Biryani</div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2">2250</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Kolkata Biryani
                    </div>

                    <div className="col m4 s4 text2">900</div>

                    <div className="col m4 s4 text2">2250</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Hyderabadi Biryani
                    </div>

                    <div className="col m4 s4 text2">900</div>

                    <div className="col m4 s4 text2">2250</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Dum Biryani (Dry Fruits)
                    </div>

                    <div className="col m4 s4 text2">900</div>

                    <div className="col m4 s4 text2">2250</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Aangara Biryani
                    </div>

                    <div className="col m4 s4 text2">900</div>

                    <div className="col m4 s4 text2">2250</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Arabic Biryani
                    </div>

                    <div className="col m4 s4 text2">900</div>

                    <div className="col m4 s4 text2">2250</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Tikka Biryani (Boneless)
                    </div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2">2850</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Butter Biryani (Boneless)
                    </div>

                    <div className="col m4 s4 text2">1100</div>

                    <div className="col m4 s4 text2">3150</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Afgani Tikka Biryani (Boneless)
                    </div>

                    <div className="col m4 s4 text2">1100</div>

                    <div className="col m4 s4 text2">3150</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Malai Tikka Biryani (Boneless)
                    </div>

                    <div className="col m4 s4 text2">1200</div>

                    <div className="col m4 s4 text2">3450</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken seekh Biryani</div>

                    <div className="col m4 s4 text2">1200</div>

                    <div className="col m4 s4 text2">3450</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Malai seekh Biryani
                    </div>

                    <div className="col m4 s4 text2">1300</div>

                    <div className="col m4 s4 text2">3450</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Keema Biryani</div>

                    <div className="col m4 s4 text2">1200</div>

                    <div className="col m4 s4 text2">3450</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Leg Dum Biryani With 12 Leg Pic
                    </div>

                    <div className="col m4 s4 text2">1600</div>

                    <div className="col m4 s4 text2">4600</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken FB's Specail Biryani
                    </div>

                    <div className="col m4 s4 text2">1200</div>

                    <div className="col m4 s4 text2">3600</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken FB's Specail Biryani
                    </div>

                    <div className="col m4 s4 text2">1200</div>

                    <div className="col m4 s4 text2">3450</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Italiyan Tikka Biryani (Boneless)
                    </div>

                    <div className="col m4 s4 text2">1200</div>

                    <div className="col m4 s4 text2">3450</div>
                  </div>
                </div>
                {this.state.pictures.map((p1, index) => {
                  return (
                    <div className="row">
                      {p1.SubCategoryName == "Chicken Biryani" ? (
                        <div className="col m12 s12" key={p1.Product_Id}>
                          <div className="col m4 s4 para4">
                            {p1.ProductName}
                          </div>

                          <div className="col m4 s4 para4">{p1.Amount}</div>

                          <div className="col m4 s4 para4">{p1.Amount1}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}{" "}
              </div>
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              <Tabs
                value={value}
                onChange={this.handleChange}
                className="background"
                scrollable
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Chicken Biryani" value={0} className="" />
                <Tab label="Fish Biryani" value={1} className="" />
                <Tab label="Veg Biryani" value={2} className="" />
                <Tab label="Mutton Biryani" value={3} className="" />
                <Tab label="Egg Biryani" className="" />
              </Tabs>

              <div className="heading" style={this.style5}>
                Fish Biryani
              </div>
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading3">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading3">Per Kg</h3>
                    </div>
                    <div className="col m4 s4">
                      <div className="heading3">Per 3kg</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2" style={this.style5}>
                      Prawns Dum Biryani
                    </div>

                    <div className="col m4 s4 text2">1400</div>

                    <div className="col m4 s4 text2">4000</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Prawns Hyd Dum Biryani
                    </div>

                    <div className="col m4 s4 text2">1400</div>

                    <div className="col m4 s4 text2">4000</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Tiger Prawns Dum Biryani
                    </div>

                    <div className="col m4 s4 text2">1900</div>

                    <div className="col m4 s4 text2">5400</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Paplet biryani</div>

                    <div className="col m4 s4 text2">1600</div>

                    <div className="col m4 s4 text2">4800</div>
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Paplet Tandoori biryani
                    </div>

                    <div className="col m4 s4 text2">1900</div>

                    <div className="col m4 s4 text2">5700</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Rawas fish Dum Biryani
                    </div>

                    <div className="col m4 s4 text2">1900</div>

                    <div className="col m4 s4 text2">5700</div>
                  </div>
                </div>

                {/* {this.state.pictures.map((p1, index) => {
                  return (
                    <div className="row">
                      {p1.SubCategoryName == "Fish Biryani" ? (
                        <div className="col m12 s12" key={p1.Product_Id}>
                          <div className="col m4 s4 para4">
                            {p1.ProductName}
                          </div>

                          <div className="col m4 s4 para4">{p1.Amount}</div>

                          <div className="col m4 s4 para4">{p1.Amount1}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}{" "} */}
              </div>
            </TabContainer>
          )}
          {value === 2 && (
            <TabContainer>
              <Tabs
                value={value}
                onChange={this.handleChange}
                className="background"
                scrollable
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Chicken Biryani" value={0} />
                <Tab label="Fish Biryani" value={1} />
                <Tab label="Veg Biryani" value={2} />
                <Tab label="Mutton Biryani" value={3} />
                <Tab label="Egg Biryani" />
              </Tabs>
              <div className="heading" style={this.style5}>
                Veg Biryani
              </div>
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading3">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading3">Per Kg</h3>
                    </div>
                    <div className="col m4 s4">
                      <div className="heading3">Per 3kg</div>
                    </div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Veg Dum Biryani</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2">2000</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Veg Soya Dum Biryani</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2">2000</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Veg Hyderabadi Biryani
                    </div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2">2000</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Veg Dum Biryani (Dry Fruits)
                    </div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2">2250</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Veg Paneer Dum Biryani
                    </div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2">2250</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Lucknowi Biryani with Panner
                    </div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2">2250</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Paneer Tikka Biryani</div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2">2250</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Paneer Malai Tikka Biryani
                    </div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2">2850</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Paneer Malai Tikka Biryani
                    </div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2">2850</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Shahi Paneer Biryani</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2">2850</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Kashmiri Biryani (Cheese & Butter)
                    </div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2">2850</div>
                  </div>
                </div>
                {this.state.pictures.map((p1, index) => {
                  return (
                    <div className="row">
                      {p1.SubCategoryName == "Veg Biryani" ? (
                        <div className="col m12 s12" key={p1.Product_Id}>
                          <div className="col m4 s4 para4">
                            {p1.ProductName}
                          </div>

                          <div className="col m4 s4 para4">{p1.Amount}</div>

                          <div className="col m4 s4 para4">{p1.Amount1}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}{" "}
              </div>
            </TabContainer>
          )}
          {value === 3 && (
            <TabContainer>
              <Tabs
                value={value}
                onChange={this.handleChange}
                className="background"
                scrollable
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Chicken Biryani" value={0} />
                <Tab label="Fish Biryani" value={1} />
                <Tab label="Veg Biryani" value={2} />
                <Tab label="Mutton Biryani" value={3} />
                <Tab label="Egg Biryani" />
              </Tabs>
              <div className="heading" style={this.style5}>
                Mutton Biryani
              </div>
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading3">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading3">Per Kg</h3>
                    </div>
                    <div className="col m4 s4">
                      <div className="heading3">Per 3kg</div>
                    </div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Dum Biryani</div>

                    <div className="col m4 s4 text2">1200</div>

                    <div className="col m4 s4 text2">3600</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Mutton Lucknowi Biryani
                    </div>

                    <div className="col m4 s4 text2">1200</div>

                    <div className="col m4 s4 text2">3600</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Mutton Hyderabadi Biryani
                    </div>

                    <div className="col m4 s4 text2">1200</div>

                    <div className="col m4 s4 text2">3600</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Mutton Kolkata Biryani
                    </div>

                    <div className="col m4 s4 text2">1200</div>

                    <div className="col m4 s4 text2">3600</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Mutton Aangara Biryani
                    </div>

                    <div className="col m4 s4 text2">1200</div>

                    <div className="col m4 s4 text2">3600</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Mutton Peshwari Chap Biryani
                    </div>

                    <div className="col m4 s4 text2">1200</div>

                    <div className="col m4 s4 text2">3600</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Mutton Dum Biryani (Dry Fruits)
                    </div>

                    <div className="col m4 s4 text2">1300</div>

                    <div className="col m4 s4 text2">3900</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Afgani Biryani</div>

                    <div className="col m4 s4 text2">1300</div>

                    <div className="col m4 s4 text2">3900</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Mutton Zam Zam Biryani
                    </div>

                    <div className="col m4 s4 text2">1300</div>

                    <div className="col m4 s4 text2">3900</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Mutton Boneless Dum Biryani
                    </div>

                    <div className="col m4 s4 text2">1700</div>

                    <div className="col m4 s4 text2">5100</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Keema Biryani</div>

                    <div className="col m4 s4 text2">1700</div>

                    <div className="col m4 s4 text2">5100</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Mutton FB's Specail Biryani
                    </div>

                    <div className="col m4 s4 text2">1500</div>

                    <div className="col m4 s4 text2">4200</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Mutton FB's Specail Biryani
                    </div>

                    <div className="col m4 s4 text2">1800</div>

                    <div className="col m4 s4 text2">5400</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Mutton FB's Specail Biryani
                    </div>

                    <div className="col m4 s4 text2" />

                    <div className="col m4 s4 text2">2400</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Mutton FB's Specail Biryani
                    </div>

                    <div className="col m4 s4 text2" />

                    <div className="col m4 s4 text2">2500</div>
                  </div>
                </div>
                {this.state.pictures.map((p1, index) => {
                  return (
                    <div className="row">
                      {p1.SubCategoryName == "Mutton Biryani" ? (
                        <div className="col m12 s12" key={p1.Product_Id}>
                          <div className="col m4 s4 para4">
                            {p1.ProductName}
                          </div>

                          <div className="col m4 s4 para4">{p1.Amount}</div>

                          <div className="col m4 s4 para4">{p1.Amount1}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}{" "}
              </div>
            </TabContainer>
          )}
          {value === 4 && (
            <TabContainer>
              <Tabs
                value={value}
                onChange={this.handleChange}
                className="background"
                scrollable
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Chicken Biryani" value={0} />
                <Tab label="Fish Biryani" value={1} />
                <Tab label="Veg Biryani" value={2} />
                <Tab label="Mutton Biryani" value={3} />
                <Tab label="Egg Biryani" value={4} />
              </Tabs>
              <div className="heading" style={this.style5}>
                Egg Biryani
              </div>
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading3">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading3">Per Kg</h3>
                    </div>
                    <div className="col m4 s4">
                      <div className="heading3">Per 3kg</div>
                    </div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Egg Dum Biryani</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2">2000</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Egg Hyderabadi Dum Biryani
                    </div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2">2000</div>
                  </div>
                </div>
                {this.state.pictures.map((p1, index) => {
                  return (
                    <div className="row">
                      {p1.SubCategoryName == "Egg Biryani" ? (
                        <div className="col m12 s12" key={p1.Product_Id}>
                          <div className="col m4 s4 para4">
                            {p1.ProductName}
                          </div>

                          <div className="col m4 s4 para4">{p1.Amount}</div>

                          <div className="col m4 s4 para4">{p1.Amount1}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}{" "}
              </div>
            </TabContainer>
          )}
          {value === 5 && (
            <TabContainer>
              <Tabs
                value={value}
                onChange={this.handleChange}
                className="background"
                scrollable
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="NON VEG" value={5} />
                <Tab label="VEG" value={6} />
              </Tabs>
              <div className="heading" style={this.style5}>
                Non Veg
              </div>
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading3">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading3">Per Kg</h3>
                    </div>
                    <div className="col m4 s4">
                      <div className="heading3">Per 3kg</div>
                    </div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Tandoor Full</div>

                    <div className="col m4 s4 text2">350</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Fry</div>

                    <div className="col m4 s4 text2">400</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Fry Boneless</div>

                    <div className="col m4 s4 text2">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Pakoda</div>

                    <div className="col m4 s4 text2">400</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Lollypop</div>

                    <div className="col m4 s4 text2">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Cutlet</div>

                    <div className="col m4 s4 text2">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Russian Kebab</div>

                    <div className="col m4 s4 text2">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken 65</div>

                    <div className="col m4 s4 text2">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Cryspy</div>

                    <div className="col m4 s4 text2">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Reshmi Kebab</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Tikka Kebab</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Nawabi seekh</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Mali Tikka White /Red
                    </div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Drumsticks</div>

                    <div className="col m4 s4 text2">45 Per Piece</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Shahi Roll</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Sheekh Kebab</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Shami Kabab</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                {this.state.pictures.map((p1, index) => {
                  return (
                    <div className="row">
                      {p1.SubCategoryName == "Non Veg" ? (
                        <div className="col m12 s12" key={p1.Product_Id}>
                          <div className="col m4 s4 para4">
                            {p1.ProductName}
                          </div>

                          <div className="col m4 s4 para4">{p1.Amount}</div>

                          <div className="col m4 s4 para4">{p1.Amount1}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}{" "}
              </div>
            </TabContainer>
          )}
          {value === 6 && (
            <TabContainer>
              <Tabs
                value={value}
                onChange={this.handleChange}
                className="background"
                scrollable
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="NON VEG" value={5} />
                <Tab label="VEG" value={6} />
              </Tabs>
              <div className="heading" style={this.style5}>
                Veg
              </div>
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading3">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading3">Per Kg</h3>
                    </div>
                    <div className="col m4 s4">
                      <div className="heading3">Per 3kg</div>
                    </div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Hara Bara Kebab</div>

                    <div className="col m4 s4 text2">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Aloo Tikka</div>

                    <div className="col m4 s4 text2">400</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Hariyali Kebab</div>

                    <div className="col m4 s4 text2">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Paneer Tikka Kabab</div>

                    <div className="col m4 s4 text2">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Paneer Chilly</div>

                    <div className="col m4 s4 text2">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Paneer 65</div>

                    <div className="col m4 s4 text2">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Veg. Manchurian Dry</div>

                    <div className="col m4 s4 text2">400</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Russian Kabab</div>

                    <div className="col m4 s4 text2">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Veg Cutlets</div>

                    <div className="col m4 s4 text2">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Corn Kababa</div>

                    <div className="col m4 s4 text2">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Punjabi Samosa</div>

                    <div className="col m4 s4 text2">20Per Pic</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Veg Spring roll</div>

                    <div className="col m4 s4 text2">40 Per Piece</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                {this.state.pictures.map((p1, index) => {
                  return (
                    <div className="row">
                      {p1.SubCategoryName == "Veg" ? (
                        <div className="col m12 s12" key={p1.Product_Id}>
                          <div className="col m4 s4 para4">
                            {p1.ProductName}
                          </div>

                          <div className="col m4 s4 para4">{p1.Amount}</div>

                          <div className="col m4 s4 para4">{p1.Amount1}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}{" "}
              </div>
            </TabContainer>
          )}
          {value === 7 && (
            <TabContainer>
              <Tabs
                value={value}
                onChange={this.handleChange}
                className="background"
                scrollable
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="CHICKEN" value={7} />
                <Tab label="MUTTON" value={8} />
                <Tab label="VEG" value={9} />
                <Tab label="PULAO" value={10} />
              </Tabs>
              <div className="heading" style={this.style5}>
                Chicken
              </div>
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading3">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading3">Per Kg</h3>
                    </div>
                    <div className="col m4 s4">
                      <div className="heading3">Per 3kg</div>
                    </div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Korma</div>

                    <div className="col m4 s4 text2">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Bhuna</div>

                    <div className="col m4 s4 text2">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Masala</div>

                    <div className="col m4 s4 text2">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Kadhai</div>

                    <div className="col m4 s4 text2">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Angara</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Special Handi</div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">FB's Special Kheema</div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Kolhapuri</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Mughlai</div>

                    <div className="col m4 s4 text2">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Murgh Mussalam
                    </div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Butter Chicken</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Kaju Masala</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Tandoor Masala
                    </div>

                    <div className="col m4 s4 text2">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Tikka Masala</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Pahadi</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Patiyala</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Do Pyaaz</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                {this.state.pictures.map((p1, index) => {
                  return (
                    <div className="row">
                      {p1.SubCategoryName == "Chicken-Maincource" ? (
                        <div className="col m12 s12" key={p1.Product_Id}>
                          <div className="col m4 s4 para4">
                            {p1.ProductName}
                          </div>

                          <div className="col m4 s4 para4">{p1.Amount}</div>

                          <div className="col m4 s4 para4">{p1.Amount1}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}{" "}
              </div>
            </TabContainer>
          )}
          {value === 8 && (
            <TabContainer>
              <Tabs
                value={value}
                onChange={this.handleChange}
                className="background"
                scrollable
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="CHICKEN" value={7} />
                <Tab label="MUTTON" value={8} />
                <Tab label="VEG" value={9} />
                <Tab label="PULAO" value={10} />
              </Tabs>
              <div className="heading" style={this.style5}>
                Mutton
              </div>
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading3">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading3">Per Kg</h3>
                    </div>
                    <div className="col m4 s4">
                      <div className="heading3">Per 3kg</div>
                    </div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Kurma</div>

                    <div className="col m4 s4 text2">900</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Kadai</div>

                    <div className="col m4 s4 text2">900</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Handi</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Dal Gosht</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Bhuna Gosht</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">FB's Specail Kheema</div>

                    <div className="col m4 s4 text2">1200</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Mutton Liver Fry (kaleji)
                    </div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Mughlai</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Rogan Josh</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Kolhapuri</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Rashida</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Afgani</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Do Piaz</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Tikka Masala</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Peshawari</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Patiyala</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Hariyali</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                {this.state.pictures.map((p1, index) => {
                  return (
                    <div className="row">
                      {p1.SubCategoryName == "Mutton-Maincource" ? (
                        <div className="col m12 s12" key={p1.Product_Id}>
                          <div className="col m4 s4 para4">
                            {p1.ProductName}
                          </div>

                          <div className="col m4 s4 para4">{p1.Amount}</div>

                          <div className="col m4 s4 para4">{p1.Amount1}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}{" "}
              </div>{" "}
            </TabContainer>
          )}

          {value === 9 && (
            <TabContainer>
              <Tabs
                value={value}
                onChange={this.handleChange}
                className=""
                scrollable
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="CHICKEN" value={7} />
                <Tab label="MUTTON" value={8} />
                <Tab label="VEG" value={9} />
                <Tab label="PULAO" value={10} />
              </Tabs>
              <div className="heading" style={this.style5}>
                VEG
              </div>
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading3">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading3">Per Kg</h3>
                    </div>
                    <div className="col m4 s4">
                      <div className="heading3">Per 3kg</div>
                    </div>
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Navaratna Korma</div>

                    <div className="col m4 s4 text2">400</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chana Chhola Masala</div>

                    <div className="col m4 s4 text2">450</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Veg.Kolhapuri</div>

                    <div className="col m4 s4 text2">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Rajma Masala</div>

                    <div className="col m4 s4 text2">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Paneer Kadai t</div>

                    <div className="col m4 s4 text2">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Paneer Tikka Masal</div>

                    <div className="col m4 s4 text2">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Mutton Liver Fry (kaleji)
                    </div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Paneer Mutter</div>

                    <div className="col m4 s4 text2">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Paneer Shahi Korma</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Butter Paneer</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Yellow Dal fry Taraka</div>

                    <div className="col m4 s4 text2">400</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Dal Makhani</div>

                    <div className="col m4 s4 text2">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Aloo Gobhi Simla Mirch
                    </div>

                    <div className="col m4 s4 text2">400</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Baby Corn Mushroom Palak
                    </div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Nargisi Kofta</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Kaju Mutter Curry</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                {this.state.pictures.map((p1, index) => {
                  return (
                    <div className="row">
                      {p1.SubCategoryName == "Veg-Maincource" ? (
                        <div className="col m12 s12" key={p1.Product_Id}>
                          <div className="col m4 s4 para4">
                            {p1.ProductName}
                          </div>

                          <div className="col m4 s4 para4">{p1.Amount}</div>

                          <div className="col m4 s4 para4">{p1.Amount1}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </TabContainer>
          )}

          {value === 10 && (
            <TabContainer>
              <Tabs
                value={value}
                onChange={this.handleChange}
                className="background"
                scrollable
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="CHICKEN" value={7} />
                <Tab label="MUTTON" value={8} />
                <Tab label="VEG" value={9} />
                <Tab label="PULAO" value={10} />
              </Tabs>
              <div className="heading" style={this.style5}>
                PULAO
              </div>
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading3">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading3">Per Kg</h3>
                    </div>
                    <div className="col m4 s4">
                      <div className="heading3">Per 3kg</div>
                    </div>
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Veg Pulao</div>

                    <div className="col m4 s4 text2">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Veg Pulao Dryfruit</div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Veg Lucknawi Pulao</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Kashmiri Pulao</div>

                    <div className="col m4 s4 text2">900</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Paneer Kadai t</div>

                    <div className="col m4 s4 text2">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Navratan Pulao</div>

                    <div className="col m4 s4 text2">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">FB special Pulao</div>

                    <div className="col m4 s4 text2">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Paneer Pulao</div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Chicken Pulao</div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Lucknawi Pulao
                    </div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">chicken Yakhni Pulao</div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Chicken Dryfruit Pulao
                    </div>

                    <div className="col m4 s4 text2">900</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">
                      Aloo Gobhi Simla Mirch
                    </div>

                    <div className="col m4 s4 text2">400</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Yakhani Pulao</div>

                    <div className="col m4 s4 text2">1200</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Lucknawi Pulao</div>

                    <div className="col m4 s4 text2">1200</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Dryfruit Pulao</div>

                    <div className="col m4 s4 text2">1300</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Mutton Zam Zam Pulao</div>

                    <div className="col m4 s4 text2">1300</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>

                {this.state.pictures.map((p1, index) => {
                  return (
                    <div className="row">
                      {p1.SubCategoryName == "Pulao" ? (
                        <div className="col m12 s12" key={p1.Product_Id}>
                          <div className="col m4 s4 para4">
                            {p1.ProductName}
                          </div>

                          <div className="col m4 s4 para4">{p1.Amount}</div>

                          <div className="col m4 s4 para4">{p1.Amount1}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </TabContainer>
          )}

          {value === 11 && (
            <TabContainer>
              <div className="heading" style={this.style5}>
                Desserts
              </div>
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading3">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading3">Per Kg</h3>
                    </div>
                    <div className="col m4 s4">
                      <div className="heading3">Per 3kg</div>
                    </div>
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Gulab Jamun</div>

                    <div className="col m4 s4 text2">12 Per Piece</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Shahi Tukda</div>

                    <div className="col m4 s4 text2">30 Per Piece</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Kesari Jalebi</div>

                    <div className="col m4 s4 text2">450</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Gaajar Ka Halwa</div>

                    <div className="col m4 s4 text2">650</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Dudhi Halwa</div>

                    <div className="col m4 s4 text2">650</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Rawa ka Halwa</div>

                    <div className="col m4 s4 text2">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Pine Apple Halwa</div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">sheer khurma</div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 text2">Jarda</div>

                    <div className="col m4 s4 text2">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                {this.state.pictures.map((p1, index) => {
                  return (
                    <div className="row">
                      {p1.CategoryName == "DESSERTS" ? (
                        <div className="col m12 s12" key={p1.Product_Id}>
                          <div className="col m4 s4 para4">
                            {p1.ProductName}
                          </div>

                          <div className="col m4 s4 para4">{p1.Amount}</div>

                          <div className="col m4 s4 para4">{p1.Amount1}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </TabContainer>
          )}
        </div>
      </div>
    );
  }
}

headermenu.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(headermenu);
