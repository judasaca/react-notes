import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ExpensesTracker from "./components/Excercises/ExpensesTracker.tsx";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import VideoGameDiscoveryApp from "./components/Excercises/VideoGameDiscoveryApp.tsx";
import theme from "./theme.ts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "excercises/",
    element: <App />,
  },
  {
    path: "excercises/expenses-tracker/",
    element: <ExpensesTracker />,
  },
  {
    path: "excercises/videogame-discovery-app/",
    element: <VideoGameDiscoveryApp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
