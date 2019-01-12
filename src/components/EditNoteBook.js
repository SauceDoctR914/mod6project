import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Moment from "moment";
class EditNoteBook extends Component {
  componentDidMount() {
    const { notebook } = this.props.location.state;
  }
  state = {
    notebook: {
      title: ""
    }
  };

  handleNoteChange = e => {
    const newNote = { ...this.state.note, [e.target.name]: e.target.value };
    this.setState({ note: newNote });
  };

  // handleDateChange = event => {
  //   this.setState({ created: event.target.value });
  // };

  handleSubmit = (e, obj) => {
    e.preventDefault();
    this.postNoteBook(this.state.notebook.title);
  };

  postNoteBook = title => {
    const URL = "http://localhost:3002/api/v1/notes";
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        notebook: {
          title: title
        }
      })
    }).then(res => res.json());
  };

  render() {
    console.log("BAH", this.props);
    return (
      <div>
        <form
          className="edit-nb-form"
          onSubmit={e => this.handleSubmit(e, this.state)}
        >
          <label htmlFor="title"> Note Title: </label>
          <br />
          <input
            className="title-nb-edit"
            onChange={this.handleNoteBookChange}
            name="title"
            id="title"
            type="text"
            value={this.state.notebook.title}
          />
          <br />

          <input type="submit" name="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(EditNoteBook);
