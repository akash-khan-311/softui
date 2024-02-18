import { createBrowserRouter } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import ComponentsLayout from "./Layout/ComponentsLayout";


const Route = createBrowserRouter([
    {path: '*', element: <NotFound/>},
    {path: '/', element: <Root/> , children: [
        {path: '/', element: <Home/>},
        
    ]},
    {path: '/components', element: <ComponentsLayout/>, children: [
        {path: 'introduction', element: <NotFound/>},
        {path: 'quickstart', element: <NotFound/>},
    ]}


])
export default Route;