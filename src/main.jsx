import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Add from "./components/Add.jsx";
import Update from "./components/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("https://chocolate-server-three.vercel.app/chocolates"),
    errorElement: <h2>error</h2>,
  },
  {
    path: "/add",
    element: <Add></Add>,
    errorElement: <h2>RRRRRRRRRRRRRRRRR</h2>,
  },
  {
    path: "/update/:id",
    element: <Update></Update>,
    loader: ({ params }) =>
      fetch(
        `https://chocolate-server-three.vercel.app/chocolates/${params.id}`
      ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
