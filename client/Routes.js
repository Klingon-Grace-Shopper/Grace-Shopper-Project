import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Home from "./components/Home";
import { me } from "./store";
import { SingleBook } from "./components/SingleBook";
import { Cart } from "./components/Cart";
import Login from "./components/Login";
import { SignUp } from "./components/SignUp";
import AdminAllUsers from "./components/AdminAllUsers";
import { AddBook } from "./components/AddBook";
import { EditBook }  from "./components/EditBook";
import RareBooks  from "./components/RareBooks";
import BooksUnder50 from "./components/booksUnder50";
import AllBooks from "./components/AllBooks";
import Search from "./components/Search";

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
          <Route exact path="/books/:id" component={SingleBook} />
          <Route exact path="/books/:id/edit" component= {EditBook} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/allusers" component={AdminAllUsers} />
          <Route exact path="/addbook" component={AddBook} />
          <Route exact path="/rare" component={RareBooks} />
          <Route exact path="/under50" component={BooksUnder50} />
          <Route exact path="/currentTitles" component={AllBooks} />
          <Route exact path="/search" component={Search} />
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
