import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>
    },
    {
        path: "/coffees",
        element: <Coffees></Coffees>
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
    },
]);

export default routes;