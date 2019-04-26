import React, { Component } from "react";
import axios from "axios";
import slider1 from "../../Assets/Image/sliderPics/Final slider banner 01.jpg";
import slider2 from "../../Assets/Image/sliderPics/Final slider banner 02.jpg";
import slider3 from "../../Assets/Image/sliderPics/Final slider banner 03.jpg";
import slider4 from "../../Assets/Image/sliderPics/Final slider banner 04.jpg";
import Q from "q";
import seperator from "../../Assets/Image/dividerTop.svg";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";
import ReactDOM from "react-dom";

const styles = { height: 400, width: "100%" };
class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [],
      autoplay: true
    };
  }
  onSelect = (active, direction) => {
    console.log("active=${active} && direction=${direction}");
  };
  visiableOnSelect = active => {
    console.log("visiable onSelect active=${active}");
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? (
      undefined
    ) : (
      <span className="glyphicon glyphicon-glass" />
    );
    rightIcon = rightIcon ? (
      undefined
    ) : (
      <span className="glyphicon glyphicon-music" />
    );
    this.setState({ leftIcon, rightIcon });
  };

  style = {
    paddingTop: 10,
    textAlign: "center"
  };
  style1 = {
    width: 250
  };
  style12 = {};
  style2 = {
    width: 250,
    paddingBottom: 30
  };
  style3 = {
    marginRight: 30
  };
  style4 = {
    paddingLeft: 60
  };
  style7 = {
    width: 250,
    maxHeight: "70%"
  };
  style5 = {
    paddingLeft: 50
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
            "Bearer ymzWQMbMKmc7VM574Pl7rIzMIvCbXEaoqsX5BRBaFqS6xaMr1DWlCXRUYtNrBulbJsi6IZu7HM5m-vdYfTbWy_4Yq_UvSSuY1n1qd2A5PwPh19duOqTdvrctC-7Z3ncb1Mt17E0N7YYKi3ReYHrTI_f9JsXjwOjwBWp9HMKXu4xwvPBujeGtqwVP2dtsO0G7zKrfmHH95kx0Nk0PkPusCfq_FjRQ1qzIxheeF0tuS1QeIo75VLwNnb42bbNikXN-7lH3ol0-68rPJ7gs5X_mLP40Wl57cnrTJfSZQmdqvJ9hGQ1O_D0XSZvFs5LM6SGUCxyfoOFPdAdw3O4zynpCOr8q0e4Z4tIfLyOUS19QLsl_OgaYgROfcOk7VpJBFbUu282Bp4-evWLtTcPdtzaY3G3r8gc7t0yFHtRwH8weljKYFTu4muwSjC4CiV6Yzxg-zS4w_a-K4DWmsXxiaSFAv9w7BH_g78SY6NOxw19DvgqF49vCYcw3_kdTyJSSGFcspT-CfdJ51f_Hs6l9F7oIiQ",
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

  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <div className="">
        <a
          className="waves-effect waves-light modal-trigger top-right12"
          href="#modal1"
        >
          <img src="../../Assets/Image/feedback.png" className="" />
        </a>

        <div id="modal1" className="modal">
          <div className="modal-content">
            <iframe
              src="http://form.syspreesolutions.com/Feedback-Form/"
              height="520"
              style={this.styles}
            />
          </div>
        </div>

        <a
          className="waves-effect waves-light modal-trigger top-right14"
          href="#modal2"
        >
          <img src="../../Assets/Image/ordernow.jpg" className="" />
        </a>

        <div id="modal2" className="modal" style={this.style7}>
          <div className="modal-content">
            <a href="">
              <img
                src="../../Assets/Image/zomato-logo.jpg"
                className="imgreview1"
              />
            </a>
            <a
              href="https://www.swiggy.com/mumbai/famous-biryaniwala-thane-thane-2"
              target="_blank"
            >
              <img src="../../Assets/Image/swiggy.jpg" className="imgreview1" />
            </a>
            <img
              src="../../Assets/Image/uber-eats.png"
              className="imgreview1"
            />
          </div>
        </div>

        <div className="carousel carousel-slider orderSlider desktopViewSlider">
          <a className="carousel-item" href="#one!">
            <img src={slider1} alt="" className="slides12" />
            <div className="bottom-right">
              <strong /> We are now on Zomato,Swiggy,Uber Eats
            </div>
            <img
              src="../../Assets/Image/dial-a-biryani05.png"
              className="top-right13"
            />
          </a>

          <a className="carousel-item" href="#two!">
            <img src={slider2} alt="" className="slides12" />
            <div className="bottom-left">
              <strong /> We are now on Zomato,Swiggy,Uber Eats
            </div>
            <img
              src="../../Assets/Image/dial-a-biryani05.png"
              className="top-right13"
            />
            <p className="top-right15">The Taste you cant forget</p>
          </a>
          <a className="carousel-item" href="#three!">
            <img src={slider3} alt="" className="slides12" />
            <div className="bottom-right">
              <strong /> We are now on Zomato,Swiggy,Uber Eats
            </div>
            <img
              src="../../Assets/Image/dial-a-biryani05.png"
              className="top-right13"
            />
          </a>
          <a className="carousel-item" href="#four!">
            <img src={slider4} alt="" className="slides12" />
            <div className="bottom-left">
              <strong /> We are now on Zomato,Swiggy,Uber Eats
            </div>
            <img
              src="../../Assets/Image/dial-a-biryani05.png"
              className="top-right13"
            />
          </a>
        </div>

        {/*
        Mobile View Slider
        */}
        <div className="carousel carousel-slider orderSlider mobileViewSlider">
          <a className="carousel-item" href="#one!">
            <img src={slider1} alt="" className="slides12" />
            <div className="bottom-right">
              <strong /> We are now on Zomato,Swiggy,Uber Eats
            </div>
            <img
              src="../../Assets/Image/dial-a-biryani05.png"
              className="top-right13"
            />
          </a>

          <a className="carousel-item" href="#two!">
            <img src={slider2} alt="" className="slides12" />
            <div className="bottom-left">
              <strong /> We are now on Zomato,Swiggy,Uber Eats
            </div>
            <img
              src="../../Assets/Image/dial-a-biryani05.png"
              className="top-right13"
            />
            <p className="top-right15">The Taste you cant forget</p>
          </a>
          <a className="carousel-item" href="#three!">
            <img src={slider3} alt="" className="slides12" />
            <div className="bottom-right">
              <strong /> We are now on Zomato,Swiggy,Uber Eats
            </div>
            <img
              src="../../Assets/Image/dial-a-biryani05.png"
              className="top-right13"
            />
          </a>
          <a className="carousel-item" href="#four!">
            <img src={slider4} alt="" className="slides12" />
            <div className="bottom-left">
              <strong /> We are now on Zomato,Swiggy,Uber Eats
            </div>
            <img
              src="../../Assets/Image/dial-a-biryani05.png"
              className="top-right13"
            />
          </a>
        </div>

        {/* <Row>
          <Col span={12}>
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
              version={3}
            >
              <div style={{ height: 400 }}>
                <img src={slider1} />
                <div className="carousel-caption">Image</div>
              </div>
              <div style={{ height: 400 }}>
                <img src={slider2} />
                <div className="carousel-caption">Image</div>
              </div>
              <div>
                <div className="carousel-center">center Text</div>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <span>text</span>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ height: 400 }}>
                <img src={slider4} />
                <div className="carousel-caption">Image</div>
              </div>
            </RBCarousel>
          </Col>
        </Row> */}

        <div className="row">
          <div className="col m12 s12 center">
            <div className="fContainer">
              <div className="heading">Top Selling Products</div>
            </div>
          </div>
        </div>

        <div className="row desktopview" style={this.style12}>
          <div className="col m12 s12">
            <div className="fContainer container">
              <div className="col m4 mobile-responsive">
                <img
                  src="../../Assets/Image/ChickenBiryani/Chicken-Dum-Biryani.jpg"
                  className="img1"
                />
                <p className="text5">Chicken Dum Biryani</p>
              </div>
              <div className="col m4 mobile-responsive">
                <img
                  src="../../Assets/Image/ChickenBiryani/Chicken-Hyderabadi-Biryani.jpg"
                  className="img1"
                />
                <p className="text5">Chicken Hyderabadi Biryani</p>
              </div>
              <div className="col m4 mobile-responsive">
                <img
                  src="../../Assets/Image/ChickenBiryani/chicken-tandoori.jpg"
                  className="img1"
                />
                <p className="text5">Chicken Tandoori Biryani</p>
              </div>
            </div>
          </div>
        </div>
        {/* {this.state.pictures.map(p => {
                  return (
                    <div>
                      {p.Amount > 900 &&
                      p.SubCategoryName != "Mutton Biryani" &&
                      p.LogoImageUrl != null ? (
                        <div key={p.Product_Id} className="col s12 m4">
                          <img
                            src={"http://localhost:59817" + p.LogoImageUrl}
                            className="imgsize"
                          />
                          <h3 className="heading1 text" style={this.style}>
                            {p.ProductName}
                          </h3>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })} */}
        <div className="row desktopview" style={this.style12}>
          <div className="col m12 s12">
            <div className="fContainer container">
              <div className="col m4 mobile-responsive">
                <img
                  src="../../Assets/Image/ChickenBiryani/Chicken-Aangara-Biryani.jpg"
                  className="img1"
                />
                <p className="text5">Chicken Angara Biryani</p>
              </div>

              <div className="col m4 mobile-responsive">
                <img
                  src="../../Assets/Image/ChickenBiryani/chicken-tikka (2).jpg"
                  className="img1"
                />
                <p className="text5">Chicken Tikka Biryani (Boneless)</p>
              </div>

              <div className="col m4 mobile-responsive">
                <img
                  src="../../Assets/Image/ChickenBiryani/chicken-seekh.jpg"
                  className="img1"
                />
                <p className="text5">Chicken Malai Seekh Biryani</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row desktopview" style={this.style12}>
          <div className="col m12 s12">
            <div className="fContainer container">
              <div className="col m4 mobile-responsive">
                <img
                  src="../../Assets/Image/Veg Biryani/750x500px/veg.jpg"
                  className="img1"
                />
                <p className="text5">Veg Dum Biryani</p>
              </div>
              <div className="col m4 mobile-responsive">
                <img
                  src="../../Assets/Image/Veg Biryani/750x500px/Paneer-Tikka-Biryani.jpg"
                  className="img1"
                />
                <p className="text5" style={this.style5}>
                  Paneer Tikka Biryani
                </p>
              </div>

              <div className="col m4 mobile-responsive">
                <img
                  src="../../Assets/Image/Veg Biryani/750x500px/Veg-Paneer-Dum-Biryani.jpg"
                  className="img1"
                />
                <p className="text5">Veg Paneer Dum Biryani</p>
              </div>
            </div>
          </div>
        </div>

        {/*
Tab View Large Devices
*/}

        <div className="row tabview" style={this.style12}>
          <div className="col m12 s12">
            <div className="fContainer container">
              <div className="col m6 mobile-responsive">
                <img
                  src="../../Assets/Image/ChickenBiryani/Chicken-Dum-Biryani.jpg"
                  className="img1"
                />
                <p className="text5">Chicken Dum Biryani</p>
              </div>
              <div className="col m6 mobile-responsive">
                <img
                  src="../../Assets/Image/ChickenBiryani/Chicken-Hyderabadi-Biryani.jpg"
                  className="img1"
                />
                <p className="text5">Chicken Hyderabadi Biryani</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row tabview" style={this.style12}>
          <div className="col m12 s12">
            <div className="fContainer container">
              <div className="col m6 mobile-responsive">
                <img
                  src="../../Assets/Image/ChickenBiryani/chicken-tandoori.jpg"
                  className="img1"
                />
                <p className="text5">Chicken Tandoori Biryani</p>
              </div>

              <div className="col m6 mobile-responsive">
                <img
                  src="../../Assets/Image/ChickenBiryani/Chicken-Aangara-Biryani.jpg"
                  className="img1"
                />
                <p className="text5">Chicken Angara Biryani</p>
              </div>
            </div>
          </div>
        </div>

        {/* {this.state.pictures.map(p => {
                  return (
                    <div>
                      {p.Amount > 900 &&
                      p.SubCategoryName != "Mutton Biryani" &&
                      p.LogoImageUrl != null ? (
                        <div key={p.Product_Id} className="col s12 m4">
                          <img
                            src={"http://localhost:59817" + p.LogoImageUrl}
                            className="imgsize"
                          />
                          <h3 className="heading1 text" style={this.style}>
                            {p.ProductName}
                          </h3>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })} */}
        <div className="row tabview" style={this.style12}>
          <div className="col m12 s12">
            <div className="fContainer container">
              <div className="col m6 mobile-responsive">
                <img
                  src="../../Assets/Image/ChickenBiryani/chicken-tikka (2).jpg"
                  className="img1"
                />
                <p className="text5">Chicken Tikka Biryani (Boneless)</p>
              </div>

              <div className="col m6 mobile-responsive">
                <img
                  src="../../Assets/Image/ChickenBiryani/chicken-seekh.jpg"
                  className="img1"
                />
                <p className="text5">Chicken Malai Seekh Biryani</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row tabview" style={this.style12}>
          <div className="col m12 s12">
            <div className="fContainer container">
              <div className="col m6 mobile-responsive">
                <img
                  src="../../Assets/Image/Veg Biryani/750x500px/veg.jpg"
                  className="img1"
                />
                <p className="text5">Veg Dum Biryani</p>
              </div>

              <div className="col m6 mobile-responsive">
                <img
                  src="../../Assets/Image/ChickenBiryani/chicken-tandoori.jpg"
                  className="img1"
                />
                <p className="text5">Chicken Tandoori Biryani</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row tabview" style={this.style12}>
          <div className="col m12 s12">
            <div className="fContainer container">
              <div className="col m6 mobile-responsive">
                <img
                  src="../../Assets/Image/Veg Biryani/750x500px/Paneer-Tikka-Biryani.jpg"
                  className="img1"
                />
                <p className="text5" style={this.style5}>
                  Paneer Tikka Biryani
                </p>
              </div>

              <div className="col m6 mobile-responsive">
                <img
                  src="../../Assets/Image/Veg Biryani/750x500px/Veg-Paneer-Dum-Biryani.jpg"
                  className="img1"
                />
                <p className="text5">Veg Paneer Dum Biryani</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col m12 s12 center">
            <div className="fContainer ">
              <img src={seperator} alt="Divider" style={this.style1} />
              <div className="heading">Fish Biryani</div>
              <img src={seperator} alt="Divider" style={this.style2} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col m12 s12">
            <div className="fContainer container">
              <div className="s12 m4">
                {this.state.pictures.map(p => {
                  return (
                    <div>
                      {p.SubCategoryName == "Fish Biryani" ? (
                        <div key={p.Product_Id} className="col s12 m4">
                          <img
                            src={"http://localhost:59817" + p.LogoImageUrl}
                            className="imgsize"
                          />
                          <h3 className="heading1 text" style={this.style}>
                            {p.ProductName}
                          </h3>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
  <div className={`col-xs-${props.span}`} style={props.style}>
    {props.children}
  </div>
);
const Button = props => {
  const { style, bsStyle, onClick } = props;
  const className = bsStyle ? `btn btn-${bsStyle}` : "btn";
  return (
    <button style={style} className={className} onClick={onClick}>
      {props.children}
    </button>
  );
};
export default Body;
