import dynamic from "next/dynamic";
import { MapConainer, MapScreenContainer } from "./MapScreen.style";
import { Container } from "../../styles/globalStyle";

const LOCATIONS = {
  0: [40.7903, -3.80033],
  1: [40.2839, -1.3541],
  2: [51.505, -0.09],
  3: [50.505, -1.09],
};

export default function MapScreen() {
  const Map = dynamic(() => import("../../components/Map/Map"), {
    ssr: false,
  });

  return (
    <Container>
      <MapScreenContainer>
        <MapConainer>
          <Map
            height={"600px"}
            width={"600px"}
            center={LOCATIONS[0]}
            markers={LOCATIONS}
            zoom={5}
          />
        </MapConainer>
      </MapScreenContainer>
    </Container>
  );
}
