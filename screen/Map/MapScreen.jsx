import dynamic from "next/dynamic";
import { MapConainer, MapScreenContainer } from "./MapScreen.style";
import { Container } from "../../styles/globalStyle";

const LOCATIONS = {
  0: [40.7903, -3.80033],
  1: [40.2839, -1.3541],
  2: [51.505, -0.09],
  3: [50.505, -1.09],
  4: [41.40338, 2.17403],
  5: [40.41656756562019, -3.7053421522525913],
  6: [40.41621111256231, -3.7036428510847568],
  7: [40.415939131934245, -3.7404023095019396],
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
            center={LOCATIONS[5]}
            markers={LOCATIONS}
            zoom={17}
          />
        </MapConainer>
      </MapScreenContainer>
    </Container>
  );
}
