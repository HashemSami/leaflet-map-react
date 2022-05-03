import React, { FC } from "react";
import { MainPageContainer } from "./MainPage.styles";

import MapPage from "./home-page/MapPage.component";

const MainPage: FC = () => {
  return (
    <MainPageContainer>
      <MapPage />
    </MainPageContainer>
  );
};

export default MainPage;
