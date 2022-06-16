import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Home from "./components/Home";
import { me } from "./store";
import { SingleBook } from "./components/SingleBook";
import { Cart } from "./components/Cart";
import Login from "./components/Login";
import { SignUp } from "./components/SignUp";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    // const { isLoggedIn } = this.props;

    return (
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          {/* <Redirect to="/home" /> */}
          <Route path="/books/:id" component={SingleBook} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        {/* {isLoggedIn ? (
          <Switch>


        <Route path="/login" exact component={Login} />
        {/* // <Route path="/login" component={Login} formName='login' />
            // <Route path="/signup" component={Login} formName='signup' />
       */}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
