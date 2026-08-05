import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Template from "../components/Template";
import Login from "../pages/login";
import Register from "../pages/register";
import Projects from "../pages/projects";
import Tasks from "../pages/tasks";
import Settings from "../pages/settings";
import Profile from "../pages/profile";
import EditProfile from "../pages/profile/EditProfile";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Template />,
        children: [
            {
                path: '*',
                element: <NotFound />
            },
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/tasks',
                element: <Tasks />
            },
            {
                path: '/settings',
                element: <Settings />
            },
            {
                path: '/profile',
                element: <Profile />,
                children: [
                    {
                        path: 'edit',
                        element: <EditProfile />
                    }
                ]
            }
        ]
    },
])