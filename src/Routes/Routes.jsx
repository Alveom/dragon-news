import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home/Home";
import NewsPage from "../Components/Home/NewsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/newspage/:id",
        Component: NewsPage,
      },
    ],
  },
]);

export default router;
