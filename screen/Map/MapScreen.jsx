import dynamic from "next/dynamic";
import { MapConainer, MapScreenContainer } from "./MapScreen.style";
import { Container } from "../../styles/globalStyle";

export default function MapScreen() {
  const Map = dynamic(() => import("../../components/Map/Map"), {
    ssr: false,
  });

  return (
    <Container>
      <MapScreenContainer>
        <MapConainer>
          <Map />
        </MapConainer>
      </MapScreenContainer>
    </Container>
  );
}
