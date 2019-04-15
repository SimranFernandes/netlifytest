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
    paddingTop: 30
  };
  style7 = {
    paddingTop: 30,
    paddingBottom: 30
  };
  style3 = {
    paddingLeft: 31
  };
  style4 = {
    border: "1px solid #e3e2e0"
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
              <Tab label="Main Course" value={7} className="" />
              <Tab label="Desserts" className="" value={11} />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabContainer>
              <div className="">
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
                  <Tab label="Mutton Biryani" value={3} className="" />
                  <Tab label="Veg Biryani" value={2} className="" />
                  <Tab label="Egg Biryani" value={4} className="" />
                  <Tab label="Fish Biryani" value={1} className="" />
                </Tabs>
                <div className="" style={this.style5} />
                <div className="borders">
                  <div className="row">
                    <div className="col m12 s12">
                      <div className="col m4 s4">
                        <h3 className="heading2">Item</h3>
                      </div>
                      <div className="col m4 s4">
                        <h3 className="heading2">Per Kg (Rs)</h3>
                      </div>
                      <div className="col m4 s4">
                        <h3 className="heading2">Per 3Kg (Rs)</h3>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={this.style5} />
                  <div className="row">
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">Chicken Dum Biryani</div>

                      <div className="col m4 s4 para">800</div>

                      <div className="col m4 s4 para">2250</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">
                        Chicken Lucknowi Biryani
                      </div>

                      <div className="col m4 s4 para">800</div>

                      <div className="col m4 s4 para">2250</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">Chicken 65 Biryani</div>

                      <div className="col m4 s4 para">800</div>

                      <div className="col m4 s4 para">2250</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">
                        Chicken Kolkata Biryani
                      </div>

                      <div className="col m4 s4 para">900</div>

                      <div className="col m4 s4 para">2250</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">
                        Chicken Hyderabadi Biryani
                      </div>

                      <div className="col m4 s4 para">900</div>

                      <div className="col m4 s4 para">2570</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">
                        Chicken Dum Biryani (Dry Fruits)
                      </div>

                      <div className="col m4 s4 para">900</div>

                      <div className="col m4 s4 para">2570</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">
                        Chicken Aangara Biryani
                      </div>

                      <div className="col m4 s4 para">900</div>

                      <div className="col m4 s4 para">2570</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">
                        Chicken Arabic Biryani
                      </div>

                      <div className="col m4 s4 para">900</div>

                      <div className="col m4 s4 para">2570</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">
                        Chicken Tikka Biryani (Boneless)
                      </div>

                      <div className="col m4 s4 para">1000</div>

                      <div className="col m4 s4 para">2850</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">
                        Chicken Butter Biryani (Boneless)
                      </div>

                      <div className="col m4 s4 para">1100</div>

                      <div className="col m4 s4 para">3150</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">
                        Chicken Afgani Tikka Biryani (Boneless)
                      </div>

                      <div className="col m4 s4 para">1100</div>

                      <div className="col m4 s4 para">3150</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">
                        Chicken Malai Tikka Biryani (Boneless)
                      </div>

                      <div className="col m4 s4 para">1200</div>

                      <div className="col m4 s4 para">3450</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">
                        Chicken Seekh Biryani
                      </div>

                      <div className="col m4 s4 para">1200</div>

                      <div className="col m4 s4 para">3450</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">
                        Chicken Malai Seekh Biryani
                      </div>

                      <div className="col m4 s4 para">1300</div>

                      <div className="col m4 s4 para">3600</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">
                        Chicken Keema Biryani
                      </div>

                      <div className="col m4 s4 para">1200</div>

                      <div className="col m4 s4 para">3450</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">
                        Chicken Leg Dum Biryani(12 Leg Piece)
                      </div>

                      <div className="col m4 s4 para">1500</div>

                      <div className="col m4 s4 para">4500</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">
                        Chicken FB's Special Biryani
                      </div>

                      <div className="col m4 s4 para">1200</div>

                      <div className="col m4 s4 para">3600</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">
                        Chicken FB's Special Biryani(Boneless)
                      </div>

                      <div className="col m4 s4 para">1400</div>

                      <div className="col m4 s4 para">4200</div>
                    </div>
                  </div>
                  <div className="row" style={this.style5}>
                    <div className="col m12 s12">
                      <div className="col m4 s4 para">
                        Chicken Italiyan Tikka Biryani (Boneless)
                      </div>

                      <div className="col m4 s4 para">1200</div>

                      <div className="col m4 s4 para">3450</div>
                    </div>
                  </div>
                  {this.state.pictures.map((p1, index) => {
                    return (
                      <div className="row">
                        {p1.SubCategoryName == "Chicken Biryani" ? (
                          <div className="col m12 s12" key={p1.Product_Id}>
                            <div className="col m4 s4 para">
                              {p1.ProductName}
                            </div>

                            <div className="col m4 s4 para">{p1.Amount}</div>

                            <div className="col m4 s4 para">{p1.Amount1}</div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}{" "}
                </div>
              </div>
            </TabContainer>
          )}
          {value === 1 && (
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
                <Tab label="Chicken Biryani" value={0} className="" />
                <Tab label="Mutton Biryani" value={3} className="" />
                <Tab label="Veg Biryani" value={2} className="" />
                <Tab label="Egg Biryani" value={4} className="" />
                <Tab label="Fish Biryani" value={1} className="" />
              </Tabs>
              <div className="heading" style={this.style5} />
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading2">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per Kg (Rs)</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per 3Kg (Rs)</h3>
                    </div>
                  </div>
                </div>
                <div className="row" style={this.style5} />
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Prawns Dum Biryani</div>

                    <div className="col m4 s4 para">1300</div>

                    <div className="col m4 s4 para">3800</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Prawns Hyd Dum Biryani</div>

                    <div className="col m4 s4 para">1400</div>

                    <div className="col m4 s4 para">4000</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Tiger Prawns Dum Biryani
                    </div>

                    <div className="col m4 s4 para">1900</div>

                    <div className="col m4 s4 para">5400</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Paplet biryani</div>

                    <div className="col m4 s4 para">1400</div>

                    <div className="col m4 s4 para">4800</div>
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Paplet Tandoori biryani
                    </div>

                    <div className="col m4 s4 para">1900</div>

                    <div className="col m4 s4 para">5500</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Rawas fish Dum Biryani</div>

                    <div className="col m4 s4 para">1900</div>

                    <div className="col m4 s4 para">5500</div>
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
                <Tab label="Chicken Biryani" value={0} className="" />
                <Tab label="Mutton Biryani" value={3} className="" />
                <Tab label="Veg Biryani" value={2} className="" />
                <Tab label="Egg Biryani" value={4} className="" />
                <Tab label="Fish Biryani" value={1} className="" />
              </Tabs>
              <div className="heading" style={this.style5} />
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading2">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per Kg (Rs)</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per 3kg (Rs)</h3>
                    </div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Veg Dum Biryani</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 para">2000</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Veg Soya Dum Biryani</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 para">2000</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Veg Hyderabadi Biryani</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 para">2000</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Veg Dum Biryani (Dry Fruits)
                    </div>

                    <div className="col m4 s4 para">800</div>

                    <div className="col m4 s4 para">2250</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Veg Paneer Dum Biryani</div>

                    <div className="col m4 s4 para">800</div>

                    <div className="col m4 s4 para">2250</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Lucknowi Biryani with Panner
                    </div>

                    <div className="col m4 s4 para">800</div>

                    <div className="col m4 s4 para">2250</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Paneer Tikka Biryani</div>

                    <div className="col m4 s4 para">800</div>

                    <div className="col m4 s4 para">2250</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Paneer Malai Tikka Biryani
                    </div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 para">2850</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Paneer Malai Tikka Biryani
                    </div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 para">2850</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Shahi Paneer Biryani</div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 para">2850</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Kashmiri Biryani (Cheese & Butter)
                    </div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 para">2850</div>
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
                <Tab label="Chicken Biryani" value={0} className="" />
                <Tab label="Mutton Biryani" value={3} className="" />
                <Tab label="Veg Biryani" value={2} className="" />
                <Tab label="Egg Biryani" value={4} />
                <Tab label="Fish Biryani" value={1} className="" />
              </Tabs>
              <div className="heading" style={this.style5} />
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading2">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per Kg (Rs)</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per 3Kg (Rs)</h3>
                    </div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Dum Biryani</div>

                    <div className="col m4 s4 para">1200</div>

                    <div className="col m4 s4 para">3600</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Mutton Lucknowi Biryani
                    </div>

                    <div className="col m4 s4 para">1200</div>

                    <div className="col m4 s4 para">3600</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Mutton Hyderabadi Biryani
                    </div>

                    <div className="col m4 s4 para">1200</div>

                    <div className="col m4 s4 para">3600</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Kolkata Biryani</div>

                    <div className="col m4 s4 para">1200</div>

                    <div className="col m4 s4 para">3600</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Aangara Biryani</div>

                    <div className="col m4 s4 para">1200</div>

                    <div className="col m4 s4 para">3600</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Mutton Peshwari Chap Biryani
                    </div>

                    <div className="col m4 s4 para">1200</div>

                    <div className="col m4 s4 para">3600</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Mutton Dum Biryani (Dry Fruits)
                    </div>

                    <div className="col m4 s4 para">1300</div>

                    <div className="col m4 s4 para">3900</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Afgani Biryani</div>

                    <div className="col m4 s4 para">1300</div>

                    <div className="col m4 s4 para">3900</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Zam Zam Biryani</div>

                    <div className="col m4 s4 para">1300</div>

                    <div className="col m4 s4 para">3900</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Mutton Boneless Dum Biryani
                    </div>

                    <div className="col m4 s4 para">1700</div>

                    <div className="col m4 s4 para">5100</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Keema Biryani</div>

                    <div className="col m4 s4 para">1700</div>

                    <div className="col m4 s4 para">5100</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Mutton FB's Special Biryani
                    </div>

                    <div className="col m4 s4 para">1500</div>

                    <div className="col m4 s4 para">4200</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Mutton FB's Special Biryani
                    </div>

                    <div className="col m4 s4 para">1800</div>

                    <div className="col m4 s4 para">5400</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Mutton FB's Special Biryani
                    </div>

                    <div className="col m4 s4 text2" />

                    <div className="col m4 s4 para">2400</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Mutton FB's Special Biryani
                    </div>

                    <div className="col m4 s4 para" />

                    <div className="col m4 s4 para">2500</div>
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

                          <div className="col m4 s4 para">{p1.Amount}</div>

                          <div className="col m4 s4 para">{p1.Amount1}</div>
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
                <Tab label="Chicken Biryani" value={0} className="" />
                <Tab label="Mutton Biryani" value={3} className="" />
                <Tab label="Veg Biryani" value={2} className="" />
                <Tab label="Egg Biryani" className="" />
                <Tab label="Fish Biryani" value={1} className="" />
              </Tabs>
              <div className="heading" style={this.style5} />
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading2">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per Kg (Rs)</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per 3Kg (Rs)</h3>
                    </div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Egg Dum Biryani</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 para">2000</div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Egg Hyderabadi Dum Biryani
                    </div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 para">2000</div>
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

                          <div className="col m4 s4 para">{p1.Amount}</div>

                          <div className="col m4 s4 para">{p1.Amount1}</div>
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
              <div className="heading" style={this.style5} />
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading2">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per Kg (Rs)</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per 3Kg (Rs)</h3>
                    </div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Tandoor Full</div>

                    <div className="col m4 s4 para">350</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Fry</div>

                    <div className="col m4 s4 para">400</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Fry Boneless</div>

                    <div className="col m4 s4 para">600</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Pakoda</div>

                    <div className="col m4 s4 para">400</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Lollypop</div>

                    <div className="col m4 s4 para">500</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Cutlet</div>

                    <div className="col m4 s4 para">600</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Russian Kebab</div>

                    <div className="col m4 s4 para">600</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken 65</div>

                    <div className="col m4 s4 para">600</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Cryspy</div>

                    <div className="col m4 s4 para">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Reshmi Kebab</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Tikka Kebab</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Nawabi Seekh</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Chicken Mali Tikka White /Red
                    </div>

                    <div className="col m4 s4 para">800</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Drumsticks</div>

                    <div className="col m4 s4 para">45 Per Piece</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Shahi Roll</div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Sheekh Kebab</div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Shami Kabab</div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                {this.state.pictures.map((p1, index) => {
                  return (
                    <div className="row">
                      {p1.SubCategoryName == "Non Veg" ? (
                        <div className="col m12 s12" key={p1.Product_Id}>
                          <div className="col m4 s4 para">{p1.ProductName}</div>

                          <div className="col m4 s4 para">{p1.Amount}</div>

                          <div className="col m4 s4 para">{p1.Amount1}</div>
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
              <div className="heading" style={this.style5} />
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading2">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per Kg (Rs)</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per 3Kg (Rs)</h3>
                    </div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Hara Bara Kebab</div>

                    <div className="col m4 s4 para">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Aloo Tikka</div>

                    <div className="col m4 s4 para">400</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Hariyali Kebab</div>

                    <div className="col m4 s4 para">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Paneer Tikka Kabab</div>

                    <div className="col m4 s4 para">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Paneer Chilly</div>

                    <div className="col m4 s4 para">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Paneer 65</div>

                    <div className="col m4 s4 para">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Veg. Manchurian Dry</div>

                    <div className="col m4 s4 para">400</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Russian Kabab</div>

                    <div className="col m4 s4 para">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Veg Cutlets</div>

                    <div className="col m4 s4 para">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Corn Kababa</div>

                    <div className="col m4 s4 para">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Punjabi Samosa</div>

                    <div className="col m4 s4 para">20Per Pic</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Veg Spring roll</div>

                    <div className="col m4 s4 para">40 Per Piece</div>

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
                <Tab label="Chicken" value={7} className="" />
                <Tab label="Mutton" value={8} className="" />
                <Tab label="Veg" value={9} className="" />
                <Tab label="Pulao" value={10} className="" />
              </Tabs>
              <div className="heading" style={this.style5} />
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading2">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per kg (Rs)</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per 3Kg (Rs)</h3>
                    </div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Korma</div>

                    <div className="col m4 s4 para">600</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Bhuna</div>

                    <div className="col m4 s4 para">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Masala</div>

                    <div className="col m4 s4 para">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Kadhai</div>

                    <div className="col m4 s4 para">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Angara</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Special Handi</div>

                    <div className="col m4 s4 para">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">FB's Special Kheema</div>

                    <div className="col m4 s4 para">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Kolhapuri</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Mughlai</div>

                    <div className="col m4 s4 para">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Murgh Mussalam</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Butter Chicken</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Kaju Masala</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Tandoor Masala</div>

                    <div className="col m4 s4 para">600</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Tikka Masala</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Pahadi</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Patiyala</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Do Pyaaz</div>

                    <div className="col m4 s4 para">700</div>

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
                <Tab label="Chicken" value={7} className="" />
                <Tab label="Mutton" value={8} className="" />
                <Tab label="Veg" value={9} className="" />
                <Tab label="Pulao" value={10} className="" />
              </Tabs>
              <div className="heading" style={this.style5} />
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading2">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per Kg (Rs)</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per 3Kg (Rs)</h3>
                    </div>
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Kurma</div>

                    <div className="col m4 s4 para">900</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Kadai</div>

                    <div className="col m4 s4 para">900</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Handi</div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Dal Gosht</div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Bhuna Gosht</div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">FB's Specail Kheema</div>

                    <div className="col m4 s4 para">1200</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Mutton Liver Fry (kaleji)
                    </div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Mughlai</div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Rogan Josh</div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Kolhapuri</div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Rashida</div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Afgani</div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Do Piaz</div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Tikka Masala</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Peshawari</div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Patiyala</div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Hariyali</div>

                    <div className="col m4 s4 para">1000</div>

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
                <Tab label="Chicken" value={7} className="" />
                <Tab label="Mutton" value={8} className="" />
                <Tab label="Veg" value={9} className="" />
                <Tab label="Pulao" value={10} className="" />
              </Tabs>
              <div className="heading" style={this.style5} />
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading2">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per Kg (Rs)</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per 3Kg (Rs)</h3>
                    </div>
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Navaratna Korma</div>

                    <div className="col m4 s4 para">400</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chana Chhola Masala</div>

                    <div className="col m4 s4 para">450</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Veg.Kolhapuri</div>

                    <div className="col m4 s4 para">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Rajma Masala</div>

                    <div className="col m4 s4 para">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Paneer Kadai t</div>

                    <div className="col m4 s4 para">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Paneer Tikka Masal</div>

                    <div className="col m4 s4 para">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Mutton Liver Fry (kaleji)
                    </div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Paneer Mutter</div>

                    <div className="col m4 s4 para">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Paneer Shahi Korma</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Butter Paneer</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Yellow Dal fry Taraka</div>

                    <div className="col m4 s4 para">400</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Dal Makhani</div>

                    <div className="col m4 s4 para">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Aloo Gobhi Simla Mirch</div>

                    <div className="col m4 s4 para">400</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">
                      Baby Corn Mushroom Palak
                    </div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Nargisi Kofta</div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Kaju Mutter Curry</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                {this.state.pictures.map((p1, index) => {
                  return (
                    <div className="row">
                      {p1.SubCategoryName == "Veg-Maincource" ? (
                        <div className="col m12 s12" key={p1.Product_Id}>
                          <div className="col m4 s4 para">{p1.ProductName}</div>

                          <div className="col m4 s4 para">{p1.Amount}</div>

                          <div className="col m4 s4 para">{p1.Amount1}</div>
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
                <Tab label="Chicken" value={7} className="" />
                <Tab label="Mutton " value={8} className="" />
                <Tab label="Veg" value={9} className="" />
                <Tab label="Pulao" value={10} className="" />
              </Tabs>
              <div className="heading" style={this.style5}>
                PULAO
              </div>
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading2">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per Kg (Rs)</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per 3Kg (Rs)</h3>
                    </div>
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Veg Pulao</div>

                    <div className="col m4 s4 para">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Veg Pulao Dryfruit</div>

                    <div className="col m4 s4 para">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Veg Lucknawi Pulao</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Kashmiri Pulao</div>

                    <div className="col m4 s4 para">900</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Paneer Kadai t</div>

                    <div className="col m4 s4 para">600</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Navratan Pulao</div>

                    <div className="col m4 s4 para">700</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">FB special Pulao</div>

                    <div className="col m4 s4 para">1000</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Paneer Pulao</div>

                    <div className="col m4 s4 para">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Pulao</div>

                    <div className="col m4 s4 para">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Lucknawi Pulao</div>

                    <div className="col m4 s4 para">800</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">chicken Yakhni Pulao</div>

                    <div className="col m4 s4 para">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Chicken Dryfruit Pulao</div>

                    <div className="col m4 s4 para">900</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Aloo Gobhi Simla Mirch</div>

                    <div className="col m4 s4 para">400</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Yakhani Pulao</div>

                    <div className="col m4 s4 para">1200</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Lucknawi Pulao</div>

                    <div className="col m4 s4 para">1200</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Dryfruit Pulao</div>

                    <div className="col m4 s4 para">1300</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Mutton Zam Zam Pulao</div>

                    <div className="col m4 s4 para">1300</div>

                    <div className="col m4 s4 para" />
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
              <div className="heading" style={this.style5} />
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="heading2">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per Kg (Rs)</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="heading2">Per 3Kg (Rs)</h3>
                    </div>
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Gulab Jamun</div>

                    <div className="col m4 s4 para">12 Per Piece</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Shahi Tukda</div>

                    <div className="col m4 s4 para">30 Per Piece</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Kesari Jalebi</div>

                    <div className="col m4 s4 para">450</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Gaajar Ka Halwa</div>

                    <div className="col m4 s4 para">650</div>

                    <div className="col m4 s4 para" />
                  </div>
                </div>
                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Dudhi Halwa</div>

                    <div className="col m4 s4 para">650</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Rawa ka Halwa</div>

                    <div className="col m4 s4 para">500</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Pine Apple Halwa</div>

                    <div className="col m4 s4 para">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">sheer khurma</div>

                    <div className="col m4 s4 para">800</div>

                    <div className="col m4 s4 text2" />
                  </div>
                </div>

                <div className="row" style={this.style5}>
                  <div className="col m12 s12">
                    <div className="col m4 s4 para">Jarda</div>

                    <div className="col m4 s4 para">800</div>

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
