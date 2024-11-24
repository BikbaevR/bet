import {createBrowserRouter} from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { CasesPage } from "../pages/CasesPage";
import { MinesPage } from "../pages/MinesPage";
import {Layout} from "../components/layout/Layout.tsx";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/cases", element: <CasesPage /> },
            { path: "/mines", element: <MinesPage /> },
        ],
    },
]);