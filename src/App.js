import React, { Component } from 'react';
// import logo from './logo.svg';
import MapContent from "./components/MapContent";
import ReactFoursquare from 'react-foursquare';
import Settings from "./components/Settings";
import axios from "axios";
import "./App.css";

var foursquare = require('react-foursquare')({
  clientID: 'XINTEH3WSKC5FJ2WPHER3EDB2SBUGZTQ4UQFO52TVCGTRMR2',
  clientSecret: 'PVLP4Q54HENAY0ZQIBIAQUOUIJLQBBD3EXZ2IOOJHZPMSQLH'
});

var params = {
  "ll": " 40.750580, -73.993584",
  "query": 'Sushi'
};

class App extends Component {
  state = {
    allPlaces: [],
    filteredPlaces: []
  };

  componentWillMount = () => {
    foursquare.venues.getVenues(params)
      .then(res=> {
        this.setState({ allPlaces: res.response.venues });
      });
  }

  // getLocations = () => {
  //   const endPoint = "https://api.foursquare.com/v2/venues/search"
  //   const parameters = {
  //     client_id: "XINTEH3WSKC5FJ2WPHER3EDB2SBUGZTQ4UQFO52TVCGTRMR2",
  //     client_secret: "PVLP4Q54HENAY0ZQIBIAQUOUIJLQBBD3EXZ2IOOJHZPMSQLH",
  //     ll:
  //     query:"sushi",
  //     near: "New York",
  //     v: "20182611"
  //   }
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Darius's Sushi Spots
        </header>
        <div>
          <Settings locations={this.state.filteredPlaces}/>
        </div>
        <MapContent locations={this.state.filteredPlaces} />

      </div>
    );
  }
}

export default App;
