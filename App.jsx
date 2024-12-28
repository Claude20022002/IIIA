import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Accueil from "../src/pages/Accueil";
import Connexion from "../src/pages/Connexion";
import Inscription from "../src/pages/Inscription";
import { Toaster } from "react-hot-toast";

export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Accueil />,
        },
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/connexion",
            element: <Connexion />,
        },
        {
            path: "/inscription",
            element: <Inscription />,
        },
    ]);
    return (
        <div>
            <Toaster />
            <RouterProvider router={router} />
        </div>
    );
}
