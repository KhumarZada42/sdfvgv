import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddPage from "../Pages/AddPage";
import HomePage from "../Pages/HomePage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/add",
        element: <AddPage />,
    },
]);
export default router
