import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Navbar from './components/navbar/navbar.jsx';
import ROUTES from './routes.js';


function App() {
  return (
    <div className="font-chakrapech overflow-x-hidden">
      <Router>
        
        <Navbar/>

        <Routes>
          {/* <Route path='register' Component={RegistrationPage} /> */}

          {ROUTES.map( ({path,element,icon,text}) => (
              <Route path={path} element={element} />
          )
          )}

          {/* ---- 404 not found redirect ---- */}
          <Route path="*" element={<Navigate to="/" replace />} />
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
