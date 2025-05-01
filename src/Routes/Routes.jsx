import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home/Home";
import NewsPage from "../Components/Home/NewsPage";
import News from "../Components/Home/News";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: Home,
      },
      {
        path: "/newspage/:id",
        Component: NewsPage,
      },
      {
        path: "/news",
        Component: News,
      },
    ],
  },
]);

export default router;
