import React, { Component } from "react";
import { Link } from "react-router-dom";
import Note from "../components/Note";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchNotes } from "../redux/actions/actions";
class NotesContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
    console.log("hey", this.props.notes);
  }

  mapNotes = () => {
    console.log(this.props.notes, "guy");
    if (this.props.notes.length > 0) {
      return this.props.notes.map(note => {
        return <Note key={note.id} note={note} currentUser={this.props.user} />;
      });
    } else {
      return <div>No Notes</div>;
    }
  };
  render() {
    return <div>{this.mapNotes()}</div>;
  }
}

const mapStateToProps = state => {
  if (state) {
    return {
      user: state.currentUser,
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
  )(NotesContainer)
);
