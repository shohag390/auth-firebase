import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomeLayout from "../layout/HomeLayout";
import Login from "../pages/Auth/Login";
import App from "../App";
import Register from "../pages/Auth/Register";
import Products from "../components/Product/Products";
import ProductDetails from "../components/Product/ProductDetails";
import Cart from "../components/Cart/Cart";
import Blogs from "../pages/Blogs/Blogs";
import Contacts from "../pages/Contacts/Contacts";

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
                {
                    path: "/product",
                    Component: Products,
                },
                {
                    path: "/product/:id",
                    Component: ProductDetails,
                },
                {
                    path: "/cart",
                    Component: Cart,
                },
                {
                    path: "/login",
                    Component: Login,
                },
                {
                    path: "/register",
                    Component: Register,
                },
                {
                    path: "/blogs",
                    Component: Blogs,
                },
                {
                    path: "/contacts",
                    Component: Contacts,
                },
            ]
        }
    ]
)

export default router;