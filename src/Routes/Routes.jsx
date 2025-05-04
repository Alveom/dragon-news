import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home/Home";
import NewsPage from "../Components/Home/NewsPage";
import News from "../Components/Home/News";
import Error from "../Pages/Error";
import LoginPage from "../Components/Login/LoginPage";
import RegisterPage from "../Components/Login/RegisterPage";
import Login from "../Pages/Login";
import PrivateRoute from "../Provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
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
        element: (
          <PrivateRoute>
            <NewsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/news",
        Component: News,
      },
      {
        path: "/login",
        Component: Login,
        children: [
          {
            path: "login-page",
            Component: LoginPage,
          },
          {
            path: "register-page",
            Component: RegisterPage,
          },
        ],
      },
    ],
  },
]);

export default router;
