import {FullLayout} from "./components/layouts/FullLayout"
import {Home} from "./pages/Home"
import { ProjectDetail } from './pages/ProjectDetail'
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path:"/",
        element:(
            <FullLayout>
                <Home/>
            </FullLayout>
        )
    },
    {
        path:"/project/:id",
        element:(
            <FullLayout>
                <ProjectDetail/>
            </FullLayout>
        )
    }
])
