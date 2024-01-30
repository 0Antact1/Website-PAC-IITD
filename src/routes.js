import Home from "./pages/home";
import RegistrationPage from "./components/register/registration";
import TeamYaj from "./team-page/Team";
import TeamPage from "./pages/team";
import Cosmicon from "./pages/cosmicon";

// routes.js
export const ROUTES = [
    {
        path:'/',
        element: <Home/>,
        icon: NaN,
        text: 'Home'
    },
    {
        path:'/register',
        element: <RegistrationPage/>,
        icon: NaN,
        text: 'Cosmicon'
    },
    {
        path:'/team',
        element: <Cosmicon/>,
        icon: NaN,
        text: 'Our Team'
    },
    {
        path:'/contact',
        element: <TeamPage/>,
        icon: NaN,
        text: 'Contact Us'
    }
];
  
export default ROUTES;