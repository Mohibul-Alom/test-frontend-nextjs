// import React, { Component, createRef } from "react";
// import {
//   Map,
//   TileLayer,
//   Marker,
//   Popup,
//   MapControl,
//   withLeaflet,
// } from "react-leaflet";
// import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
// import { LeafletContainer } from "./Map.style";

// export default class MyMap extends Component {
//   state = {
//     center: {
//       lat: 31.698956,
//       lng: 76.732407,
//     },
//     marker: {
//       lat: 31.698956,
//       lng: 76.732407,
//     },
//     zoom: 13,
//     draggable: true,
//   };

//   refmarker = createRef(this.state.marker);

//   toggleDraggable = () => {
//     this.setState({ draggable: !this.state.draggable });
//   };

//   updateMarker = (e) => {
//     // const marker = e.marker;
//     this.setState({
//       marker: e.marker.getLatLng(),
//     });
//     console.log(e.marker.getLatLng());
//   };

//   updatePosition = () => {
//     const marker = this.refmarker.current;
//     if (marker != null) {
//       this.setState({
//         marker: marker.leafletElement.getLatLng(),
//       });
//     }
//     console.log(marker.leafletElement.getLatLng());
//   };

//   render() {
//     const position = [this.state.center.lat, this.state.center.lng];
//     const markerPosition = [this.state.marker.lat, this.state.marker.lng];

//     return (
//       <LeafletContainer className="map-root">
//         <Map
//           center={[40.8054, -74.0241]}
//           zoom={14}
//           scrollWheelZoom={false}
//           style={{ height: "100%", width: "100%" }}
//         >
//           <Marker
//             position={[40.8054, -74.0241]}
//             draggable={true}
//             animate={true}
//           >
//             <Popup>Hey ! you found me</Popup>
//           </Marker>
//         </Map>
//       </LeafletContainer>
//     );
//   }
// }

import * as React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet-universal";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

import { icon } from "leaflet";

const ICON = icon({
  iconUrl: "/marker-icon.png",
  iconSize: [32, 50],
});

export default () => {
  L.Icon.Default.imagePath = "/marker-icon.png";

  return (
    <Map
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "400px", width: "400px" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} icon={ICON}>
        <Popup>
          <>
            A pretty CSS3 popup. <br /> Easily customizable.
          </>
        </Popup>
      </Marker>
    </Map>
  );
};
