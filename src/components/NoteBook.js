import React, { Component } from "react";
import { Link } from "react-router-dom";
import Note from "../components/Note";
import { withRouter } from "react-router-dom";
class NoteBook extends Component {
  render() {
    return (
      <div>
        {NoteBook.title}
        <NewNote />
      </div>
    );
  }
}

export default withRouter(NoteBook);
