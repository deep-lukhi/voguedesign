import { createBrowserRouter } from "react-router-dom";
import Defaultlayout from "./defaultlayout/defaultlayout";
import Home from "../components/home";
import CardDetails from "../components/cardDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Defaultlayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/cartdetails',
                element: <CardDetails />
            }
        ]
    },
    {
        path: "*",
        element: <h1>page not found</h1>
    }
]);

export default router;