import React, { useState } from 'react';
import Seat from './Seat';
import './Seat.css';

const BusSeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedBus, setSelectedBus] = useState('');
  const [passengerName, setPassengerName] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [bookingHistory, setBookingHistory] = useState([]);

  const handleSeatClick = (seatNumber) => {
    // Toggle seat selection
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatNumber)
        ? prevSelectedSeats.filter((seat) => seat !== seatNumber)
        : [...prevSelectedSeats, seatNumber]
    );
  };

  const handleBooking = () => {
    // Check if the selected seats are within a valid range (e.g., between 1 and 30)
    const isValidSeatRange = selectedSeats.every((seat) => seat >= 1 && seat <= 30);
  
    // Check if the passenger name contains only letters and spaces
    const isValidPassengerName = /^[a-zA-Z\s]+$/.test(passengerName.trim());
  
    // Check if the selected bus is not an empty string
    const isValidSelectedBus = !!selectedBus.trim();
  
    if (!isValidSeatRange) {
      alert('Invalid seat selection. Please choose seats between 1 and 30.');
      return;
    }
  
    if (!isValidPassengerName) {
      alert('Invalid passenger name. Please enter a valid name containing only letters and spaces.');
      return;
    }
  
    if (!isValidSelectedBus) {
      alert('Please select a bus.');
      return;
    }
  
    // Implement your booking logic here, e.g., send data to the server
    const pricePerSeat = 1500; // Replace with your actual pricing logic
    const totalPrice = selectedSeats.length * pricePerSeat;
    setTotalPrice(totalPrice);
  
    setBookingSuccess(true);
  
    // Save booking to history
    const newBooking = {
      id: Date.now(), // Add a unique identifier
      bus: selectedBus,
      seats: selectedSeats,
      passenger: passengerName,
      price: totalPrice,
    };
    setBookingHistory((prevHistory) => [...prevHistory, newBooking]);
  
    // Reset state for the next booking
    setSelectedSeats([]);
    setSelectedBus('');
    setPassengerName('');
  };  

  const handleCancelBooking = (bookingId) => {
    // Implement cancellation logic
    setBookingHistory((prevHistory) => prevHistory.filter((booking) => booking.id !== bookingId));
  };

  const busOptions = ['Bus A', 'Bus B', 'Bus C']; // Replace with your actual bus names

  return (
    <div>
      <div>
        <h1>Bus Seat Booking</h1>
      </div>
      <div className="seat-container">
        {[...Array(30)].map((_, index) => (
          <Seat
            key={index}
            seatNumber={index + 1}
            selected={selectedSeats.includes(index + 1)}
            onClick={handleSeatClick}
          />
        ))}
      </div>
      <div>
        <div className="input-row">
          <div className="input-container">
            <label>Select Bus:</label>
            <select value={selectedBus} onChange={(e) => setSelectedBus(e.target.value)}>
              <option value="" disabled>
                Select a bus
              </option>
              {busOptions.map((bus) => (
                <option key={bus} value={bus}>
                  {bus}
                </option>
              ))}
            </select>
          </div>

          <div className="input-container">
            <label>Passenger Name:</label>
            <input
              type="text"
              placeholder="Enter passenger name"
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
            />
          </div>
        </div>

        <p>Selected Seats: {selectedSeats.join(', ')}</p>

        <button onClick={handleBooking} disabled={selectedSeats.length === 0 || !selectedBus || !passengerName}>
          Book Now
        </button>

        {bookingSuccess && (
          <div>
            <div className='success'>
              <p>
                Booking successful! Thank you.
              </p>
            </div>
            <p>
              Bus: {selectedBus}, Seats: {selectedSeats.join(', ')}, Passenger: {passengerName}, Total Price: LKR{totalPrice}
            </p>
            <button onClick={() => handleCancelBooking(bookingHistory[bookingHistory.length - 1].id)}>
              Cancel Booking
            </button>
          </div>
        )}
      </div>

      <div>
      <div className="table-container">
        <h2>Booking History</h2>
        <table>
          <thead>
            <tr>
              <th>Bus</th>
              <th>Seats</th>
              <th>Passenger</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookingHistory.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.bus}</td>
                <td>{booking.seats.join(', ')}</td>
                <td>{booking.passenger}</td>
                <td>LKR {booking.price}</td>
                <td>
                  <button onClick={() => handleCancelBooking(booking.id)}>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default BusSeatBooking;
