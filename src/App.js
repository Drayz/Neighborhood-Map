import React, { Component } from "react";
import menu from "./menu.png";
import MapContent from "./components/MapContent";
import Settings from "./components/Settings";
import "./App.css";

//Information from my Foursquare API that get passed into the `let` url
const client = "XINTEH3WSKC5FJ2WPHER3EDB2SBUGZTQ4UQFO52TVCGTRMR2";
const secret = "I5XXOLB2Y41MRYG4UXS22V2V5VLM43GOTCU12QEBLUMOVKSH";
const version = "20182611";

class App extends Component {
  state = {
    lat: 40.75058,
    lon: -73.993584,
    zoom: 13,
    allPlaces: [],
    query: "",
    filteredPlaces: [],
    isOpen: false
  };

  //credit by Doug Brown's FEND7 Neighborhood Map
  componentDidMount = () => {
    let link = `https://api.foursquare.com/v2/venues/search?client_id=${client}&client_secret=${secret}&v=${version}&radius=5000&ll=${
      this.state.lat
    },${this.state.lon}&intent=browse&query=Sushi`;
    let headers = new Headers();
    let request = new Request(link, {
      method: "GET",
      headers
    });
    fetch(request)
      .then(response => response.json())
      .then(json => {
        const allPlaces = json.response.venues;
        this.setState(
          {
            allPlaces: allPlaces,
            filteredPlaces: allPlaces
          },
          () => console.log(this.state)
        );
      })
      .catch(error => {
        alert("FourSquare data was not able to be received");
      });
  };

  handleQuery = query => {
    this.setState(
      {
        query
      },
      () => this.filterLocals(query)
    );
  };

  filterLocals = query => {
    // Filter locations to match query string
    const newPlaces = this.state.allPlaces.filter(venue =>
      venue.name.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ filteredPlaces: newPlaces });
  };

  handleMapClick = e => {
    console.log(e);
  };

  handleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header" >
          <div onClick={this.handleMenu}>
            <img src={menu} alt="menulogo" roles="menu"/>
          </div>
          <h4>Darius's Sushi Spots</h4>
        </header>
        <div>
          {this.state.isOpen && (
            <Settings
              locations={this.state.filteredPlaces}
              query={this.state.query}
              handleQuery={this.handleQuery}
            />
          )}
        </div>
        <MapContent
          filteredPlaces={this.state.filteredPlaces}
          onMapClicked={this.handleMapClick}
        />
      </div>
    );
  }
}

export default App;
