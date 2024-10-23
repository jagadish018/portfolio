import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Project from "./components/Project";
import Skills from "./components/Skills";

import GetInTouch from "./components/GetInTouch";
import Home from "./components/Home";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
        </>
      ),
    },
    {
      path: "/skills",
      element: (
        <>
          <Header />
          <Skills />
        </>
      ),
    },
    {
      path: "/projects",
      element: (
        <>
          <Header />
          <Project />
        </>
      ),
    },
    {
      path: "/get-in-touch", // If you need the "Let's connect" route
      element: (
        <>
          <Header />
          <GetInTouch />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <Header />
          <div className="p-10">
            <h1 className="text-3xl">404 - Page Not Found</h1>
          </div>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
