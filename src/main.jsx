import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./Components/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Infopage from "./Components/Infopage.jsx";
import Login from "./Components/Login.jsx";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { Store } from "./Features/Store.js";
import Recepe from "./Components/Recepe.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Infopage",
        element: <Infopage />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path : "Recepe",
        element : <Recepe/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
