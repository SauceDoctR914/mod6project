import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Moment from "moment";
class EditNote extends Component {
  state = {
    note: {
      title: "",
      created: "",
      description: "",
      content: ""
    }
  };

  handleNoteChange = e => {
    this.setState({
      note: { ...this.state.note, [e.target.name]: e.target.value }
    });
  };
  handleDateChange = event => {
    this.setState({ created: event.target.value });
  };

  handleSubmit = (e, obj) => {
    e.preventDefault();
    this.editNote(this.state.note, this.state.note.id);
  };

  editNote = (note, id) => {
    const URL = `http://localhost:3002/api/v1/notes/${id}`;
    fetch(URL, {
      method: "PATCH",
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
          <select value={this.state.created} onChange={this.handleDateChange}>
            <option value={this.state.created}>
              {Moment().format("MMMM Do, YYYY")}
            </option>
          </select>
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

export default withRouter(EditNote);
