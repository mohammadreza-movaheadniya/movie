import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router/index.js";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`;
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
