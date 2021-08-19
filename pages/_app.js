import "../styles/globals.css";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import userReducer from "../redux/user";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
