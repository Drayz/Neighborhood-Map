import React, { Component } from "react";

class Settings extends Component {
  state = {
    query: ""
  };

  //Ths function handles the query after user inputs a value.
  //And updates the query of the markers to reflect the search
  handleChange = query => {
    this.setState(
      {
        query
      },
      () => this.props.handleQuery(query)
    );
  };

  render() {
    return (
      <div style={{ position: "sticky", zIndex: 9999999999, width:"100%" }}>
        <input
          type="text"
          value={this.props.location}
          placeholder="search locations"
          onChange={e => this.handleChange(e.target.value)}
        />
        <ul style={{ listStyleType: "none" }}>
          {this.props.locations.map(location => {
            return <li key={location.id}>{location.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Settings;
