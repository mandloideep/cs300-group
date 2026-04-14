import { createBrowserRouter } from "react-router";
import { clientURLs } from "./constants";
import App from "./App.jsx";
import Shell from "./components/shell/shell.jsx";

const router = createBrowserRouter(
  [
    {
      Component: Shell,
      children: [
        {
          path: clientURLs.HOME,
          element: <App />,
        },
        {
          path: clientURLs.ABOUT,
          element: <div>About</div>,
        },
        {
          path: clientURLs.LIST_MEALS,
          element: <div>Meals</div>,
        },
      ],
    },
    {
      path: "*",
      element: <div>Not Found</div>,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

export default router;
