import { createBrowserRouter } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";


const Route = createBrowserRouter([
    {path: '*', element: <NotFound/>},
    {path: '/', element: <Root/> , children: [
        {path: '/', element: <Home/>}
    ]}

])
export default Route;