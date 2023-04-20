import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./app/App";
import "./sass/style.scss";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hello",
    element: <h1>hello</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
