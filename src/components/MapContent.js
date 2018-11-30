import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContent extends Component {
  state = {
    selectedPlace: {},
    activeMarker: {},
    showingInfoWindow: false
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    const centerPoint = { lat: 40.75058, lng: -73.993584 };
    return (
      <Map
        google={this.props.google}
        initialCenter={centerPoint}
        onReady={this.fetchPlaces}
        onClick={this.onMapClicked}
        zoom={14}
        role="application"
        aria-label="map">
        {this.props.locations.map(location => {
          return (
            <Marker
              key={location.id}
              onClick={this.onMarkerClick}
              title={location.title}
              name={location.name}
              position={location.coordinates}
            />
          );
        })}

        <InfoWindow
          onClose={this.onInfoWindowClose}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCysxnyznagb7jSbj36rCUYeW5YIJou-Ps"
})(MapContent);
