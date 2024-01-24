import RegistrationPage from '../../components/register/registration'
import './topbar.css'
import {Link} from 'react-router-dom'

export default function Topbar() {
  return (

    <div className='top'>
        <div className='topLeft'>
            <img className='topImage' src={require("./pac-logo-legacy.jpg")} alt="PAC logo" />
        </div>
        <div className='topRight'>
            <ul className='topList'>
                <li className='topListItem'>Home</li>
                <li className='topListItem'><a href="register/registration.html">Cosmicon</a></li>
                <li className='topListItem'><Link to="register" target={<RegistrationPage/>}>Cosmicon</Link></li>  
                <li className='topListItem'>IIT Delhi</li>
                <li className='topListItem'>Team</li>
                <li className='topListItem'>Contact Us</li>
            </ul>
        </div>
        
    </div>


  )
}
