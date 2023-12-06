import './App.css';
import apptimus from './favicon.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BusSeatBooking from './components/BusSeatBooking';
import BusList from './components/BusList';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar background">
            <Navbar />
        </div>
        <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <Routes>
                            {/* <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} /> */}
                            <Route path="/booking" element={<BusSeatBooking />} />
                            <Route path="/bus-list" element={<BusList />} />
                        </Routes>
                    </div>
                </div>
            </section>
      </div>
    </Router>
  );
}

export default App;