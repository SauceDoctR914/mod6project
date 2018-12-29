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
    console.log("hey", this.props);
  }

  mapNotes = () => {
    if (this.props.notes.length > 0) {
      return this.props.notes.map(note => {
        return <Note key={note.id} note={note} />;
      });
    } else {
      return <div>No Notebooks</div>;
    }
  };
  render() {
    return (
      <div>
        {NoteBook.title}
        <NewNote />
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
