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
      <div className="">
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
                {this.state.pictures.map((p1, index) => {
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
                })}{" "}
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
                      <h3 className="para4">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="para4">Per Kg</h3>
                    </div>
                    <div className="col m4 s4">
                      <div className="para4">Per 3kg</div>
                    </div>
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
                      <h3 className="para4">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="para4">Per Kg</h3>
                    </div>
                    <div className="col m4 s4">
                      <div className="para4">Per 3kg</div>
                    </div>
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
                <Tab label="PULAO" value={6} />
              </Tabs>
              <div className="heading" style={this.style5}>
                Mutton
              </div>
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="para4">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="para4">Per Kg</h3>
                    </div>
                    <div className="col m4 s4">
                      <div className="para4">Per 3kg</div>
                    </div>
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
                <Tab label="PULAO" value={6} />
              </Tabs>
              <div className="heading" style={this.style5}>
                VEG
              </div>
              <div className="borders">
                <div className="row">
                  <div className="col m12 s12">
                    <div className="col m4 s4">
                      <h3 className="para4">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="para4">Per Kg</h3>
                    </div>
                    <div className="col m4 s4">
                      <div className="para4">Per 3kg</div>
                    </div>
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
                      <h3 className="para4">Item</h3>
                    </div>
                    <div className="col m4 s4">
                      <h3 className="para4">Per Kg</h3>
                    </div>
                    <div className="col m4 s4">
                      <div className="para4">Per 3kg</div>
                    </div>
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
