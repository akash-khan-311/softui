import { createBrowserRouter } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import ComponentsLayout from "./Layout/ComponentsLayout";
import Avatar from "./UIcomponents/Avatar/Avatar";
import Button from "./UIcomponents/Button/Button";
import Carousel from "./UIcomponents/Carousel/Carousel";
import Checkbox from "./UIcomponents/CheckBox/Checkbox";
import Card from "./UIcomponents/Card/Card";
import Form from "./UIcomponents/Form/Form";
import Footer from "./UIcomponents/Footer/Footer";
import Input from "./UIcomponents/Input/Input";
import Accordion from "./UIcomponents/Accordion/Accordion";


const Route = createBrowserRouter([
    {path: '*', element: <NotFound/>},
    {path: '/', element: <Root/> , children: [
        {path: '/', element: <Home/>},
        
    ]},
    {path: '/components', element: <ComponentsLayout/>, children: [
        {path: 'introduction', element: <NotFound/>},
        {path: 'quickstart', element: <NotFound/>},
        {path:'avatar', element: <Avatar/>},
        {path:'accordion', element: <Accordion/>},
        {path: 'button', element: <Button/>},
        {path: 'carousel', element:<Carousel/> },
        {path: 'checkbox', element: <Checkbox/>},
        {path: 'Card', element: <Card/>},
        {path: 'Form', element: <Form/>},
        {path: 'Footer', element: <Footer/>},
        {path: 'input', element: <Input/>}
        
    ]}


])
export default Route;