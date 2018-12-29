import React, { Component } from "react";
import NoteBook from "../components/NoteBook";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchNoteBooks } from "../redux/actions/actions";
class UserPage extends Component {
  componentDidMount() {
    this.props.fetchNoteBooks();
    console.log("hey", this.props);
  }

  myNoteBooks = () => {
    if (this.props.notebooks.length > 0) {
      return this.props.notebooks.map(notebook => {
        return <NoteBook key={notebook.id} notebook={notebook} />;
      });
    } else {
      return <div>No Notebooks</div>;
    }
  };

  render() {
    return <div>{this.myNoteBooks()}</div>;
  }
}
const mapStateToProps = state => {
  if (state) {
    return {
      jwt: state.currentUser.jwt,
      notebooks: state.notebooks
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
