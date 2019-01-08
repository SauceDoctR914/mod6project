import React, { Component } from "react";
import { Link } from "react-router-dom";
import Note from "../components/Note";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchNotes } from "../redux/actions/actions";
import NotesContainer from "../containers/NotesContainer";
class NoteBook extends Component {
  componentDidMount() {
    this.props.fetchNotes();
    console.log("hey", this.props.notes);
  }

  mapNotes = () => {
    console.log(this.props.notebook, "guy");
    if (this.props.notes.length > 0) {
      return this.props.notes.map(note => {
        return (
          <Note
            key={note.id}
            note={note}
            notebookID={this.props.notebook.id}
            currentUser={this.props.user}
          />
        );
      });
    } else {
      return <div>No Notes</div>;
    }
  };
  render() {
    return (
      <Link
        to={`/homepage/notebook/${this.props.notebook.id}`}
        style={{ textDecoration: "none" }}
      >
        <div>{this.props.notebook.attributes.title}</div>
      </Link>
    );
  }
}
const mapStateToProps = state => {
  if (state) {
    return {
      currentUser: state.currentUser,
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
