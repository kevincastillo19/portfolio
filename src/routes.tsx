import {FullLayout} from "./components/layouts/FullLayout"
import {Home} from "./pages/Home"
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path:"/",
        element:(
            <FullLayout>
                {/* <>div</> */}
                <Home/>
            </FullLayout>
        )
    }
])
