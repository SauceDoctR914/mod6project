import React, { Component } from "react";
import NoteBook from "../components/NoteBook";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class UserPage extends Component {
  componentDidMount() {
    this.props.fetchNoteBooks();
  }

  myNoteBooks = () => {
    return this.props.notebooks.map(notebook => {
      return <NoteBook notebook={notebook} />;
    });
  };

  render() {
    return <div>{this.myNoteBooks()}</div>;
  }
}
const mapStateToProps = state => {
  if (state) {
    return {
      jwt: state.currentUser.jwt
    };
  }
};

const mapDispatchToProps = dispatch => {
  return { fetchNoteBooks: () => dispatch(fetchNoteBooks()) };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPage)
);
