import React, { Component } from "react";

class SignUp extends Component {

state = {
  user: {
    email: "",
    password: ""
  }
}

  handleChange = (e) => {
      const newUser = {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
      this.setState({
        user: newUser
      })
    }


  handleSubmit = (e, obj) => {
    e.preventDefault();
    console.log("yo", e.target);
    this.signup(this.state.user.email, this.state.user.password);
  };
  componentDidMount() {}

  signup = (email, username, displayname, password, pCon) => {
   const URL = 'http://localhost:3000/users'
   if (password === pCon){
     fetch(URL, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json"
       },
       body: JSON.stringify({
         user: {
           email: email,
           password: password
         }
       })
     })
     .then(res => res.json())
     .then(this.props.history.push('/login'))
   } else {
     alert("not same password bro") // render something less anooying than alert
   }


  logout = () => {
    localStorage.removeItem("jwt");
  };

  render() {
    return (
      <div className="App">
        <h1 style={{ marginTop: "20vh", marginBottom: "5vh" }} />
        <form onSubmit={e => this.handleSubmit(e, this.state)}>
          <label htmlFor="email"> E-mail: </label>
          <br />
          <input
            onChange={this.handleChange}
            name="email"
            id="email"
            type="text"
            value={this.state.auth.email}
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            onChange={this.handleChange}
            name="password"
            id="password"
            type="text"
            value={this.state.auth.password}
          />
          <br />
          <input type="submit" name="Submit" />
        </form>
        <br />
      </div>
    );
  }
}

export default SignUp;
