import React from "react";
import { wrapper } from "../redux/store";
import "../style/App.css";

const MyApp_Modify = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp_Modify);
