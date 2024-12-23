import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layout/Default";
import { App } from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      { path: "/", element: <App /> },
      // { path: '/about', element: <About/> },
      // { path: '/contact', element: <Contact/> },
      // { path: '/products', element: <Products/> },
      // { path: '/moneylife', element: <MoneyLife/> },
      // { path: '/:product', element: <Product/> },
      // { path: '*', element: <NotFound/> },
    ],
  },
]);
