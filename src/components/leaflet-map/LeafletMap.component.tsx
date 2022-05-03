import React, { FC, useRef, useEffect } from "react";
import { LeafletMapContainer, LeafletMapDiv } from "./LeafletMap.styles";

import { map } from "./leaflet-map-object";

const LeafletMap: FC = () => {
  const mapDiv = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapDiv.current) {
      return;
    }

    const myMap = map(mapDiv.current);

    myMap.createTiles();
    myMap.getLatlngClickEvent();
  }, []);

  return (
    <LeafletMapContainer>
      <LeafletMapDiv ref={mapDiv}></LeafletMapDiv>
    </LeafletMapContainer>
  );
};

export default LeafletMap;
