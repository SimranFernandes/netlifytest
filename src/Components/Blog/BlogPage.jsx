import React, { Component } from "react";
class Blog extends Component {
  state = {};

  styles = {
    overflow: "scroll",
    overflowx: "hidden"
  };
  render() {
    return (
      <div>
        <iframe
          src="https://syspreesolutions.com/Famous-Biryani/blog-page/"
          style={this.styles}
          width="1348"
          height="1348"
        />
      </div>
    );
  }
}

export default Blog;
