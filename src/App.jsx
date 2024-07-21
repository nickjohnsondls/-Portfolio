import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Total } from "./screens/Total";
import { TotalFrame } from "./screens/TotalFrame";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Total />,
  },
  {
    path: "/total",
    element: <Total />,
  },
  {
    path: "/total-frame",
    element: <TotalFrame />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
