import type { Router as RemixRouter } from "@remix-run/router";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { viewRoutes } from "./views/viewRoutes";
import RootLayout from "./Layout";


const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      ...viewRoutes
    ]
  },
];

const routes: RemixRouter = createBrowserRouter([
  ...mainRoutes
]);


function App() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <RouterProvider router={routes} />
    </section>
  );
}
export default App;
