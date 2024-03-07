import { createBrowserRouter } from "react-router-dom";
import ComponentsLayout from "./Layout/ComponentsLayout";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Accordion from "./UIcomponents/Accordion/Accordion";
import Alert from "./UIcomponents/Alert/Alert";
import Avatar from "./UIcomponents/Avatar/Avatar";
import Badge from "./UIcomponents/Badge/Badge";
import Button from "./UIcomponents/Button/Button";
import CTA from "./UIcomponents/CTA/CTA";
import Card from "./UIcomponents/Card/Card";
import Carousel from "./UIcomponents/Carousel/Carousel";
import Checkbox from "./UIcomponents/CheckBox/Checkbox";
import Drawer from "./UIcomponents/Drawer/Drawer";
import Footer from "./UIcomponents/Footer/Footer";
import Form from "./UIcomponents/Form/Form";
import Hero from "./UIcomponents/Hero/Hero";
import Input from "./UIcomponents/Input/Input";
import Modal from "./UIcomponents/Modal/Modal";
import Navbar from "./UIcomponents/Navbar/Navbar";
import Pagination from "./UIcomponents/Pagination/Pagination";
import Progress from "./UIcomponents/Progress/Progress";
import Spinner from "./UIcomponents/Spinner/Spinner";
import Stats from "./UIcomponents/Stats/Stats";
import Table from "./UIcomponents/Table/Table";
import Testimonial from "./UIcomponents/Testimonial/Testimonial";
import Toggle from "./UIcomponents/Toggle/Toggle";
import Tooltip from './UIcomponents/ToolTips/Tooltip';
import Skeleton from "./UIcomponents/Skeleton/Skeleton";
import Tab from "./UIcomponents/Tab/Tab";
import ErrorPages from "./UIcomponents/Error Pages/ErrorPages";
import SpeedDial from "./UIcomponents/SpeedDial/SpeedDial";


const Route = createBrowserRouter([
  { path: "*", element: <NotFound /> },
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/components",
    element: <ComponentsLayout />,
    children: [
      { path: "introduction", element: <NotFound /> },
      { path: "quickstart", element: <NotFound /> },
      { path: "avatar", element: <Avatar /> },
      { path: "accordion", element: <Accordion /> },
      { path: "button", element: <Button /> },
      { path: "carousel", element: <Carousel /> },
      { path: "checkbox", element: <Checkbox /> },
      { path: "card", element: <Card /> },
      { path: "form", element: <Form /> },
      { path: "footer", element: <Footer /> },
      { path: "input", element: <Input /> },
      { path: "slider", element: <NotFound /> },
      { path: "modal", element: <Modal /> },
      { path: "navbar", element: <Navbar /> },
      { path: "spinner", element: <Spinner /> },
      { path: "stats", element: <Stats /> },
      { path: "hero", element: <Hero /> },
      { path: "pagination", element: <Pagination /> },
      { path: "table", element: <Table /> },
      { path: "toggle", element: <Toggle /> },
      { path: "Tooltip", element: <Tooltip /> },
      { path: "badge", element: <Badge /> },
      { path: "hero", element: <Hero /> },
      { path: "pagination", element: <Pagination /> },
      { path: "table", element: <Table /> },
      { path: "alert", element: <Alert /> },
      { path: "drawer", element: <Drawer /> },
      { path: "testimonials", element: <Testimonial /> },
      { path: "progress", element: <Progress /> },
      { path: "cta", element: <CTA /> },
      {path:'skeleton', element: <Skeleton/>},
      {path:'tab', element: <Tab/>},
      {path: 'error pages', element: <ErrorPages/>},
      {path: 'speeddial', element: <SpeedDial/>}
    ],
  },
]);
export default Route;
