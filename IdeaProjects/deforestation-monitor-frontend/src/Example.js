import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 13
        };
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              maxZoom="18"
              tileSize="256"
              accessToken="pk.eyJ1IjoiY2FoNGF6enoiLCJhIjoiY2tiYjZ5b2N0MDFteTJ2cDJ4eTJtdW1hbSJ9.Z6og7_Z4OyAEgsT2_axgzw"
              TileLayer="mapbox/satellite-streets-v11"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Map>
        )
      }
}