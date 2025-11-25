import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Dashboard from "./assets/components/Dashboard";
import Navbar from "./assets/components/Navbar";
import "./App.css";
import ParamComp from "./assets/components/ParamComp";
import MockTests from "./assets/components/MockTests";
import Courses from "./assets/components/Courses";
import Reports from "./assets/components/Reports";
import NotFound from "./assets/components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
    children: [
      // { index: true, element: <Courses /> },
      { path: "courses", element: <Courses /> },
      { path: "mock-tests", element: <MockTests /> },
      { path: "reports", element: <Reports /> },
    ],
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
    children: [
      // { index: true, element: <Courses /> },
      { path: "courses", element: <Courses /> },
      { path: "mock-tests", element: <MockTests /> },
      { path: "reports", element: <Reports /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      // { index: true, element: <Courses /> },
      { path: "courses", element: <Courses /> },
      { path: "mock-tests", element: <MockTests /> },
      { path: "reports", element: <Reports /> },
    ],
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <Navbar />
        <ParamComp />
      </div>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
