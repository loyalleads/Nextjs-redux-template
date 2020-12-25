import React from "react";
import { wrapper } from "../redux/store";
import "../style/App.css";
import "../style/dashboard.css";

const MyApp_Modify = ({ Component, pageProps }) => {
  return (
      <Component {...pageProps} />
  );
};

export default wrapper.withRedux(MyApp_Modify);
