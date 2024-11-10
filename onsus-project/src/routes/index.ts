import { RouteObject } from "react-router-dom";
import MainRoot from "../components/roots/main-root/MainRoot";
import Home from "../pages/home/Home";

const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: MainRoot(),
    children: [
      {
        path: "",
        element: Home(),
      },
    ],
  },
];

export default ROUTES;
