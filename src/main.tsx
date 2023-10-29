import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ExpensesTracker from "./components/Excercises/ExpensesTracker.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "excercises/",
    element: <App />,
    children: [
      {
        path: "expenses-tracker/",
        element: <ExpensesTracker />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
