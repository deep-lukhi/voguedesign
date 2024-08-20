import { createBrowserRouter } from "react-router-dom";
import Defaultlayout from "./defaultlayout/defaultlayout";
import Home from "../components/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Defaultlayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "*",
        element: <h1>page not found</h1>
    }
]);

export default router;