import React, { Component } from 'react';
import menu from './menu.png';
import MapContent from "./components/MapContent";
import Settings from "./components/Settings";
import "./App.css";

const client = "XINTEH3WSKC5FJ2WPHER3EDB2SBUGZTQ4UQFO52TVCGTRMR2";
const secret = "I5XXOLB2Y41MRYG4UXS22V2V5VLM43GOTCU12QEBLUMOVKSH";
const version = "20182611";

class App extends Component {
  state = {
    lat: 40.750580,
    lon: -73.993584,
    zoom: 13,
    allPlaces: [],
    filteredPlaces: null
  };

  //credit by Doug Brown's FEND7 Neighborhood Map
  componentDidMount = () => {
    let url = `https://api.foursquare.com/v2/venues/search?client_id=${client}&client_secret=${secret}&v=${version}&radius=5000&ll=${this.state.lat},${this.state.lon}&intent=browse&query=Sushi`;
    let headers = new Headers();
    let request = new Request(url, {
     method: 'GET',
     headers
   });
   fetch(request)
     .then(response => response.json())
     .then(json => {
       const allPlaces = json.response.venues;
       this.setState({
         allPlaces,
         filtered: this.filterLocals(allPlaces, "")
       });
     })
     .catch(error => {
       alert("FourSquare data was not able to be received");
     });
 }

 filterLocals = (venues, query) => {
    // Filter locations to match query string
    return venues.filter(venue => venue.name.toLowerCase().includes(query.toLowerCase()));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img src={menu} alt="menulogo" />
          </div>
          <h4>Darius's Sushi Spots</h4>
        </header>
        <div>
        <Settings locations={this.state.filteredPlaces}/>
        </div>
        <MapContent
          locations={this.state.allPlaces}
          venues={this.state.filteredPlaces}
           />
      </div>
    );
  }
}

export default App;
