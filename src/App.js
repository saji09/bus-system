import './App.css';
import apptimus from './favicon.png';
import BusSeatBooking from './components/BusSeatBooking';

function App() {
  return (
    <div className="App">
      <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src={require('./favicon.png')} alt="logo"/>
                    </div>
                    <li>
                        <a href="#courses">Busses</a>
                    </li>
                    <li>
                        <a href="#tutorials">Booking</a>
                    </li>
                    <li>
                        <a href="#jobs">About</a>
                    </li>
                    <li>
                        <a href="#student">Clients</a>
                    </li>
                </ul>
 
                <div class="rightNav">
                    <input
                        type="text"
                        name="search"
                        id="search"
                    />
                    <button class="btn btn-sm">
                        Search
                    </button>
                </div>
            </nav>
 
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <BusSeatBooking />
                    </div>
                </div>
            </section>

            {/* <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer> */}
    </div>
  );
}

export default App;