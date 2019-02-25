import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import axios from "axios";
import Q from "q";

export default function createEnquiryForm(data) {
  const deferred = Q.defer();
  var url = "http://localhost:59817/api/Contact/create";
  axios
    .request({
      url: url,
      auth: true,
      method: "POST",
      mode: "cors",
      data: JSON.stringify(data),
      crossDomain: true,
      headers: {
        Authorization:
          "Bearer Js1iKGyfbRbKLpOm3SGPIo-IqoulpmBiNwoIcbEEWV-k-dlolaZgYACTe_Cwv98zAllBmIoYiSo7PndWuO5xiQIh0B2abo3gVw78u4_BiaDk5vAnlcLR149M0gxI9jk9Y32EjAqOZogeAlmyXyFaXYcxEv7isMBHJd70M2BOqVz3Ibjd7F_ifo9C0w8580iAkSFdUiTsgBRNj837e2ijfQYHUpWKiy3TExpB8At3MKVp2LQcUlVfSvIsiwj9bMhAWFsYVXz0kLNPi0EwRDw68DgaKVThujLMmiJ3LBfaD-lb9iS3w4JR_NSrmRYvOazIzgEVsO5aqHoxO_eUnu9Ux5HOBvAq-as_PiUJ_n3Z4pXUomO32wWCTnv0d9K5JQVaK2cGB15KXN_Cr_kbCNeneSrDxqcm84KCIqVj7nVWvWt6WUxxhqzqU4dxKgeNeGHi2f5-MEIlv_V0mTu_MvLdpdjVP54uap6VNwWspJlWZQg15NNHPAPON1Rl2aszHxyQLcKkc_sudTez882L5jQv5Q",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(error);
    });
  return deferred.promise;
}
