import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import EditNote from "./EditNote";
class Note extends Component {
  deleteNote = note => {
    console.log("gavin");
    let id = note.id;
    const URL = `http://localhost:3002/api/v1/notes/${id}`;
    fetch(URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("jwt")
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <Link
          to={{
            pathname: `/homepage/notes/${this.props.note.id}/editnote`,
            state: { note: this.props.note }
          }}
        >
          <button className="edit-button"> Make Changes</button>
        </Link>
        <div className="notetitle-div">{this.props.note.attributes.title}</div>
        <br />
        <div className="date-div">{this.props.note.attributes.created}</div>
        <br />
        <div className="desc-div">{this.props.note.attributes.description}</div>
        <br />
        <div className="content-div">{this.props.note.attributes.content}</div>
        <button
          className="delete-note"
          onClick={(e, note) => this.deleteNote(e, this.props.note)}
        >
          Delete Note
        </button>
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
