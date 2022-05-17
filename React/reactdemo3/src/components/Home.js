import React, { Component } from "react";

import "../assets/css/index.css";

import Axios from "./Axios";

import FetchJsonp from "./FetchJsonp";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Axios />

        <FetchJsonp />
      </div>
    );
  }
}

export default Home;
