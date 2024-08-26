import { createBrowserRouter } from "react-router-dom";
import Aboutus from "../pages/Aboutus";
import HomePage from "../pages/HomePage";
import Mainlayout from "../components/Mainlayout";
import Product from "../pages/Product";
import Contactus from "../pages/Contactus";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/aboutus",
                element: <Aboutus />,
            },
            {
                path: "/product",
                element: <Product/>
            },
            {
                path: "/contactus",
                element: <Contactus/>
            }
        ],
  }
]);

export default router


