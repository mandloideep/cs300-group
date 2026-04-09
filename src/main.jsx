import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import About from "./about.jsx";
import NotFound from "./notFound.jsx";
import ProductLayout from "./productLayout.jsx";
import ProductDetails from "./productDetails.jsx";
import ProductList from "./productLits.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/about",
      element: <About />,
    },
    // /product
    {
      path: "/product",
      element: <ProductLayout />,
      children: [
        {
          path: ":id", // /product/:id
          element: <ProductDetails />,
        },
        {
          path: "",
          index: true, // /product
          element: <ProductList />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
