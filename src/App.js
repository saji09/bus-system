import './App.css';
import apptimus from './favicon.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BusSeatBooking from './components/BusSeatBooking';
import BusList from './components/BusList';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  
  return (
    <Router>
      <div className="App">
        <div className="navbar background">
            <Navbar />
        </div>
        <div>
       
      
            <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<BusSeatBooking />} />
            <Route path="/bus-list" element={<BusList />} />
            <Route path="/profile" element={<Profile />} />

            </Routes>
       
        </div>
      </div>
    </Router>
  );
}

export default App;





