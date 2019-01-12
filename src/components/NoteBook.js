import React, { Component } from "react";
import { Link } from "react-router-dom";
import Note from "../components/Note";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchNotes } from "../redux/actions/actions";
import NotesContainer from "../containers/NotesContainer";
import NewNoteBook from "../components/NewNoteBook";
class NoteBook extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  mapNotes = () => {
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
    console.log(
      this.props.notebook.attributes,
      "workornot",
      this.props.notebook.id
    );
    return (
      <Link
        to={{
          pathname: `/homepage/notebook/${this.props.notebook.id}`,
          state: { notebook: this.props.notebook }
        }}
      >
        <div>
          <div className="title-bar">
            {this.props.notebook.attributes.title}
          </div>
          <NewNoteBook />
        </div>
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
