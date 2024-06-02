import {FullLayout} from "./components/layouts/FullLayout"
import {Home} from "./pages/Home"
import { ProjectDetail } from './pages/ProjectDetail'
import { createBrowserRouter } from "react-router-dom";
import Blog from "./pages/Blog";

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
    },
    {
        path:"/blog/",
        element:(
            <FullLayout>
                <Blog/>
            </FullLayout>
        )
    }
])
