import React from "react";
import HomePage from "./pages/HomePage";
import post, { data } from "./data/data";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./Components/components/Header";
import RootLayout from "./Components/components/RootLayout";

const App = () => {
  console.log(data);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/about-page",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
