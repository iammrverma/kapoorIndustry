import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

// importing Components

import "./App.css";
import Layout from "./components/Layout";
import Categories from "./components/Categories";

// Lazy Loading Components
const Home = lazy(() => import("./components/Home"));
const Product = lazy(() => import("./components/Product"));
const AllProducts = lazy(() => import("./components/Categories"));
const One = lazy(() => import("./components/One"));
const Two = lazy(() => import("./components/Two"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "Categories",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Categories />
          </Suspense>
        ),
        children: [
          {
            path: "one",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <One />
              </Suspense>
            ),
          },
          {
            path: "two",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Two />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "Categories/:product",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Product />
          </Suspense>
        ),
      },
    ],
  },
  { path: "/admin", element: <div>Admin</div> },
  { path: "*", element: <div>HE he he</div> },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
