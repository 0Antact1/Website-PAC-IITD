import Home from "./pages/home";
import RegistrationPage from "./pages/registration";
import TeamYaj from "./pages/TeamYaj";
import TeamPage from "./pages/team";
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
        path:'/register',
        element: <RegistrationPage content={eventRegister}/>,
        icon: NaN,
    },
    {
        path:'/team',
        element: <TeamYaj/>,
        text: 'Our Team'
    },
    {
        path:'/contact',
        element: <TeamPage/>,
        icon: NaN,
        text: 'Contact Us'
    },
    
];
  
export default ROUTES;