import Home from "./pages/home";
import RegistrationPage from "./pages/registration";
import TeamPage from "./pages/team";
import ContactPage from "./pages/contact.jsx";
import Cosmicon from "./pages/cosmicon";

import eventRegister from './data/eventRegister.js';

// text: 0, if not on navbar
export const ROUTES = [
    {
        path:'/',
        element: <Home/>,
        icon: NaN,
        text: 'Home'
    },
    {
        path:'/cosmicon',
        element: <Cosmicon/>,
        icon: NaN,
        text: 'Cosmicon'
    },
    {
        link:"https://home.iitd.ac.in",
        text: 'IIT Delhi'
    },
    {
        path:'/register',
        element: <RegistrationPage content={eventRegister}/>,
        icon: NaN,
    },
    {
        path:'/team',
        element: <TeamPage/>,
        text: 'Our Team'
    },
    {
        path:'/contact',
        element: <ContactPage/>,
        icon: NaN,
        text: 'Contact Us'
    },

];
  
export default ROUTES;