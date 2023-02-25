import ComponentsView from "../UI/components"
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<ComponentsView/>
    }
])
