import React, { FC } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import MainPage from "./pages/MainPage.component";

// import Axios from "axios";
// Axios.defaults.baseURL = process.env.BECKENDURL || "";

const App: FC = () => {
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
