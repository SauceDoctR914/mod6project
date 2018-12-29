import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Note extends Component {
  render() {
    return (
      <div>
        {this.props.note.title} {this.props.note.created}
        {this.props.note.title}
      </div>
    );
  }
}
export default withRouter(Note);
