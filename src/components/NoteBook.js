import React, { Component } from "react";
import { Link } from "react-router-dom";
import Note from "../components/Note";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchNotes } from "../redux/actions/actions";
import NewNote from "./NewNote";
class NoteBook extends Component {
  componentDidMount() {
    this.props.fetchNotes();
    console.log("hey", this.props.notes);
  }

  mapNotes = () => {
    console.log(this.props.notes, "guy");
    if (this.props.notes.length > 0) {
      return this.props.notes.map(note => {
        return (
          <Note key={note.id} note={note} notebookID={this.props.notebook.id} />
        );
      });
    } else {
      return <div>No Notes</div>;
    }
  };
  render() {
    console.log(this.props.notebook.attributes.title, "workwork");
    return (
      <div>
        {this.props.notebook.attributes.title}
        {this.mapNotes()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  if (state) {
    return {
      jwt: state.currentUser.jwt,
      notes: state.notes
    };
  }
};

const mapDispatchToProps = dispatch => {
  return { fetchNotes: () => dispatch(fetchNotes()) };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NoteBook)
);
