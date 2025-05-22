import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router/index.js";
import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`;
createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);
