import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layout/Default";
import { LandingPage } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      { path: "/", element: <LandingPage /> },
      // { path: "/projects", element: <Projects /> },
      // { path: '/contact', element: <Contact/> },
      // { path: '*', element: <NotFound/> },
    ],
  },
]);
