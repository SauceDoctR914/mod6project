import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import EditNote from "./EditNote";
class Note extends Component {
  render() {
    console.log(this.props.note.id, "id missing");
    return (
      <React.Fragment>
        <Link
          to={{
            pathname: `/homepage/notes/${this.props.note.id}/editnote`,
            state: { note: this.props.note }
          }}
        >
          <button className="edit-button">Make Changes</button>
        </Link>
        <div className="notetitle-div">{this.props.note.attributes.title}</div>
        <br />
        <div className="date-div">{this.props.note.attributes.created}</div>
        <br />
        <div className="desc-div">{this.props.note.attributes.description}</div>
        <br />
        <div className="content-div">{this.props.note.attributes.content}</div>
      </React.Fragment>
    );
  }
}
export default withRouter(Note);
// <NewNote notebookId={this.props.notebookID} />
// <Link
//   to={`/${this.props.currentUser.email}e/homepag/notes/${
//     this.props.note.id
//   }`}
//   style={{ textDecoration: "none" }}
// >
// </Link>
