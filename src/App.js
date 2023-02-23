import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Tools from './pages/Tools';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navigation />
        <div className="container-fluid" style={{ flex: 1 }}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/tools' element={<Tools/>} />
          </Routes>
        </div>
        <div className="card text-center">
          <div className="card-footer text-muted">&copy; MAHFUZ AFTAB 2023</div>
        </div>
      </div>
    </Router>
  );
};

export default App;
