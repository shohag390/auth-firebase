import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: App,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    path: "/",
                    Component: HomeLayout,
                },
            ]
        }
    ]
)

export default router;