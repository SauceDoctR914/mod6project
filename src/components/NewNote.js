import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Moment from "moment";
class NewNote extends Component {
  state = {
    note: {
      title: "",
      created: "",
      description: "",
      content: ""
    }
  };

  handleNoteChange = () => {
    this.setState({
      note: { ...this.state.note, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = (e, obj) => {
    e.preventDefault();
    this.postNote(this.state.note);
  };

  postNote = note => {
    const URL = "http://localhost:3002/api/v1/notes";
    if (password) {
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          note: {
            title: "",
            created: "",
            description: "",
            content: ""
          }
        })
      }).then(res => res.json());
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e, this.state)}>
          <label htmlFor="title"> NoteBook Title: </label>
          <br />
          <input
            onChange={this.handleNoteChange}
            name="title"
            id="title"
            type="text"
            value={""}
          />
          <br />
          <label htmlFor="created"> Date Created: </label>
          <select
            value={Moment().format("dddd, MMMM Do YYYY")}
            onChange={this.handleNoteChange}
          />
          <br />
          <label htmlFor="description"> Description: </label>
          <br />
          <input
            onChange={this.handleNoteChange}
            name="description"
            id="description"
            type="text"
            value={this.state.note.description}
          />
          <br />
          <label htmlFor="content">Content:</label>
          <br />
          <textarea
            onChange={this.handleNoteChange}
            name="content"
            id="content"
            type="text"
            value={this.state.note.content}
          />
          <br />
          <input type="submit" name="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(NewNote);
