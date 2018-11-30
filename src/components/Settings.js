import React, { Component } from "react";

class Settings extends Component {
  state: {
    query: '',
    searchResults:[]

  }

  //the search query is being up dated based on users input.
  updateQuery = () => {

  }

  //Hides makers when user searches query
  hideMarkers = () => {

  }

  //Menu icon will toogle the display when clicked on
  toggleSearchOption = (e) => {
    
  }

  render() {
    return (
      <div id="search-results">
        <form id="search">
          <label>
            <input type="text" value={this.props.location} placeholder="search locations"/>
          </label>
          <input type="submit" value="Find"/>
        </form>

      </div>
    );
  }
}
export default Settings;
