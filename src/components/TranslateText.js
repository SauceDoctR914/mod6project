import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import EditNote from "./EditNote";
class TranslateText extends Component {
  key = "3c9d81b3b53b";

  render() {
    return (
      <div>
        <div style={container}>
          {translationButton}
          <div id="interim" style={interim} />
          <div id="final" style={final} />
          <div id="translation" style={translation} />
          <div id="othertranslation" style={othertranslation} />
        </div>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          placeholder={"Please select a language"}
        />
      </div>
    );
  }
}

export default TranslateText;
