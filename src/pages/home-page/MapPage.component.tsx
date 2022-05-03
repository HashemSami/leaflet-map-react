import React, { FC } from "react";
import { MapPageContainer } from "./MapPage.styles";

import LeafletMap from "../../components/leaflet-map/LeafletMap.component";

const MapPage: FC = () => {
  return (
    <MapPageContainer>
      <LeafletMap />
    </MapPageContainer>
  );
};

export default MapPage;
