import { createBrowserRouter } from "react-router-dom";

import { NavigateLinks } from "./../components/NavigateLinks";

export const routes = [
  {
    path: "/",
    element: <NavigateLinks />,
    children: [
      {
        path: "/",
        element: <div>Hello world!</div>,
      },
      {
        path: "/about",
        element: <div>About!</div>,
      },
      {
        path: "/post",
        element: <div>Post!</div>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
