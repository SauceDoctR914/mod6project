import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import NewNote from "./NewNote";
class Note extends Component {
  render() {
    console.log(this.props.note, "itsmez");
    return (
      <div>
        {this.props.note.attributes.title} {this.props.note.attributes.created}
        {this.props.note.attributes.title}
        <NewNote notebookId={this.props.notebookID} />
      </div>
    );
  }
}
export default withRouter(Note);
