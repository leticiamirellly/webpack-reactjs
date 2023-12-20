import { RouteObject } from "react-router-dom";
import Rockets from "../views/Rockets/rockets";
import Crew from "../views/Crew/crew";
import Home from "./Home/home";

export const viewRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/rockets",
    element: <Rockets />,
  },
  {
    path: "/crew",
    element: <Crew />,
  },
];
