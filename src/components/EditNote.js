import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchNotes } from "../redux/actions/actions";
import Moment from "moment";
class EditNote extends React.Component {
  componentDidMount() {
    const { note } = this.props.location.state;
  }

  note = this.props.location.state.note.attributes;
  id = this.props.location.state.id;
  notebookID = parseInt(
    this.props.location.state.note.relationships.notebook.data.id
  );

  state = {
    errors: false,
    note: {
      id: this.id,
      title: this.note.title,
      created: this.note.created,
      description: this.note.description,
      content: this.note.content
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
        Accept: "application/json",
        Authorization: localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        note: {
          title: "",
          created: "",
          description: "",
          content: ""
        }
      })
    })
      .then(res => res.json())
      .then(note => {
        if (note.error) {
          this.setState({ errors: true });
        } else {
          this.props.history.push(`/homepage/notebook/${this.notebookID}`);
        }
      });
  };
  render() {
    console.log(this.props.location.state.note, "gavin");
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e, this.state)}>
          <label htmlFor="title"> NoteBook Title: </label>
          <br />
          <input
            placeholder={this.state.note.title}
            onChange={this.handleNoteChange}
            name="title"
            id="title"
            type="text"
            value={this.state.note.title}
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
            placeholder={this.state.note.description}
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
            placeholder={this.state.note.content}
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
