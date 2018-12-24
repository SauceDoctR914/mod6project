import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import UserPage from "./containers/UserPage";
import { connect } from "react-redux";
import { fetchNoteBooks } from "./redux/actions/actions";
class App extends Component {
  state = {
    errors: false,
    auth: { email: "", password: "" }
  };

  componentDidMount() {
    const URL = "http://localhost:3002/api/v1/users";
    if (localStorage.getItem("jwt")) {
      fetch(URL, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("jwt")
        }
      })
        .then(res => res.json())
        .then(user => {
          if (!user.error) {
            return this.props.currentUser;
          } else {
            this.logout();
          }
        });
      }

  }

  logout = () => {
    localStorage.removeItem("jwt");
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/signup"
            render={routerProps => <SignUp {...routerProps} />}
          />
          <Route
            exact
            path="/login"
            render={routerProps => <LogIn {...routerProps} />}
          />
          <Route
            exact
            path={"/:email/homepage"}
            render={routerProps => <LogIn {...routerProps} />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state) {
    return {
      jwt: state.currentUser.jwt
    };
  }
};

const mapDispatchToProps = dispatch => {
  return { fetchNoteBooks: () => dispatch(fetchNoteBooks()) };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
