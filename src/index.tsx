import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import StarWars from "./components/StarWars";
import StarWarsCharDetail from "./components/StarWarsCharDetail";
import Error from './components/Error'

const App = () => {
  return <Outlet />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <StarWars />,
      },
      {
        path: "/starwars/:starwarsId",
        element: <StarWarsCharDetail />,
      },
    ],
    errorElement: <Error />
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
  document.getElementById("root")
);
