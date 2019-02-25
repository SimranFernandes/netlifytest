import React, { Component } from "react";
import axios from "axios";
import Q from "q";
class bodyOrder extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "select", picture: [] };
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  state = {};

  componentDidMounts() {
    const deferred = Q.defer();
    var urls = "http://localhost:59817/api/Location/getAllAreas";

    axios
      .request({
        urls: urls,
        method: "GET",
        mode: "no-cors",
        crossDomain: true,
        headers: {
          Authorization:
            "Bearer Js1iKGyfbRbKLpOm3SGPIo-IqoulpmBiNwoIcbEEWV-k-dlolaZgYACTe_Cwv98zAllBmIoYiSo7PndWuO5xiQIh0B2abo3gVw78u4_BiaDk5vAnlcLR149M0gxI9jk9Y32EjAqOZogeAlmyXyFaXYcxEv7isMBHJd70M2BOqVz3Ibjd7F_ifo9C0w8580iAkSFdUiTsgBRNj837e2ijfQYHUpWKiy3TExpB8At3MKVp2LQcUlVfSvIsiwj9bMhAWFsYVXz0kLNPi0EwRDw68DgaKVThujLMmiJ3LBfaD-lb9iS3w4JR_NSrmRYvOazIzgEVsO5aqHoxO_eUnu9Ux5HOBvAq-as_PiUJ_n3Z4pXUomO32wWCTnv0d9K5JQVaK2cGB15KXN_Cr_kbCNeneSrDxqcm84KCIqVj7nVWvWt6WUxxhqzqU4dxKgeNeGHi2f5-MEIlv_V0mTu_MvLdpdjVP54uap6VNwWspJlWZQg15NNHPAPON1Rl2aszHxyQLcKkc_sudTez882L5jQv5Q",
          "Access-Control-Allow-Origin": "*"
        }
      })

      .then(results => {
        deferred.resolve(results);
        console.log(results.data);
        this.setState({ picture: results.data });
      });
  }

  render() {
    return (
      <div>
        <div className="form-group dropborder2">
          <label htmlFor="select2">Select Location</label>
          <select
            value={this.state.value}
            onChange={this.onChange.bind(this)}
            className="form-control"
          >
            {this.state.picture.map(options => {
              return (
                <option value={options} key={options}>
                  {options.AreaName}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default bodyOrder;
