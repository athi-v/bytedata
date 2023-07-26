import {createBrowserRouter} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Error from '../pages/Error'
import Home from '../pages/Home'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "*",
        element: <Error />
    }


])