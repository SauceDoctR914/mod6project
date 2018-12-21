import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
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
            this.props.currentUser;
          } else {
            this.logout();
          }
        });
    } else {
      this.history.push("/signup");
    }
  }

  logout = () => {
    localStorage.removeItem("jwt");
  };

  render() {
    return <div className="App" />;
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
  return { currentUser: user => dispatch(getUser(user)) };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
