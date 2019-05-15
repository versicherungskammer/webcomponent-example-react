import Checkout from "./_Checkout";
import SignIn from "./signin";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Index extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Checkout} />
          <Route path="/signin" component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default Index;
