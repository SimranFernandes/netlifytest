import React, { Component } from "react";
class bodymenu extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }

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
            "Bearer 6j9m9CF4E1UJ0yBOh0zxJ1grekbUlal-HCz2n5-8ev1ksSKwpPiR1iVUBPyLPnzTyizZN7uYlJ1ezhI9K3S4OkEfZuoFk-GvC0XCGmRl9haWbMWxec9jqfE94fauZSemfKQbwD77VkVVMFUMTEBEN9F0nbO92eru0zdE1q3ZrHhXQUcdhVbbFqsbFdBwOch4EykzfpOpSL9nYu3eMMaErgynQuCGJUXpYY-kz76Jh_KJ44aHz8x2MUw9aa02TueUh1tBpjXZW66p6dwAxBJu5xM36qboBSQlB-m-1aRJywhvqewrrgxoqO3XVnEEU76H_EBUPgXuGz2gR6Frj-DFTNyDOw3PnYOiZUyUQRI2tiNJFNC-FpCV8uSjY5xMVymAECBYWPl2BzMhQUp6FYyCpLNaHGoirlaHMOL8cSTNDbLtkCKnu4_4fOTIOajMRVUYNBisBmKA2LwlJom9X9FJdOuGJ-zwopz_D-LhbIXDy_KRkTvB35fZ6cL0UYIRCrK9QgjoJVx1SOLFhi1Lf5D_CQ",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(results => {
        deferred.resolve(results);
        console.log(results.data);
        let pictures = results.data.map(pic => {
          return (
            <div key={pic.Product_Id} className="col s12 m4">
              {/* <img src={pic.picture.large} className="responsive-img" /> */}
              <p>{pic.ProductName}</p>
            </div>
          );
        });
        this.setState({ pictures: pictures });
      })
      .catch(error => {
        console.log(error);
      });
    return deferred.promise;
  }
  //   fetch("http://localhost:59817/api/Product/manage")
  //     .then(results => {
  //       return results.json();
  //     })
  //     .then(data => {
  //       let pictures = data.results.map(pic => {
  //         return (
  //           <div key={pic.results}>
  //             <li>{pic.ProductName}</li>
  //             {/* <img src={pic.picture.medium} alt="medium" /> */}
  //           </div>
  //         );
  //       });
  //       this.setState({ pictures: pictures });
  //       console.log("state", this.state.pictures);
  //     });
  // }

  render() {
    return (
      <div className="container2">
        <div className="container1">{this.state.pictures}</div>
      </div>
    );
  }
}

export default bodymenu;
