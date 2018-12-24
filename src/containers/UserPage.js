import React, { Component } from "react";
import NoteBook from "../components/NoteBook";
import { withRouter } from "react-router-dom";
class UserPage extends Component {
  render() {
    return (
      <div>
        <NoteBook />
        yo
      </div>
    );
  }
}

export default withRouter(UserPage);
