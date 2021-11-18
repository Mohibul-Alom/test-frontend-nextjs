import { Map, TileLayer, Marker, Popup } from "react-leaflet-universal";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

import { icon } from "leaflet";

const ICON = icon({
  iconUrl: "/marker-icon.png",
  iconSize: [32, 50],
});

export default ({
  markers,
  center,
  width = "400px",
  height = "400px",
  zoom = 10,
}) => {
  L.Icon.Default.imagePath = "/marker-icon.png";

  return (
    <Map center={center} zoom={zoom} style={{ height: height, width: width }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Object.keys(markers).map((index) => {
        return (
          <Marker key={`map${index}`} position={markers[index]} icon={ICON}>
            <Popup>
              <>
                A pretty CSS3 popup. <br /> Easily customizable.
              </>
            </Popup>
          </Marker>
        );
      })}
    </Map>
  );
};
