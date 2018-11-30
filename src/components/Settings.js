import React, { Component } from "react";

class Settings extends Component {
  state: {
    query: '',
    searchResults:[]
  }

  render() {
    return (
      <div id="search-results">
        <form id="search">
          <label>
            <input type="text" value={this.props.location} placeholder="search locations"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul style={{ listStyleType: "none" }}>
          {this.props.locations.map(location => {
            return <li key={location.name}>{location.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Settings;
