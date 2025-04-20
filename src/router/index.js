import App from "../App.js";
import Home from "../pages/Home.js";
import ExplorePage from "../pages/ExplorePage.js";
import DetailsPage from "../pages/DetailsPage.js";
import SearchPage from "../pages/SearchPage.js";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":explore",
        element: <ExplorePage />,
      },
      {
        path: ":explore/:id",
        element: <DetailsPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
