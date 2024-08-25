import { createBrowserRouter } from "react-router-dom";
import Aboutus from "../pages/Aboutus";
import HomePage from "../pages/HomePage";
import Mainlayout from "../components/Mainlayout";

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
        ],
  }
]);

export default router


