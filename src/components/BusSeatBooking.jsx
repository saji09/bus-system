import React, { useState } from 'react';
import Seat from './Seat';

const BusSeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedBus, setSelectedBus] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleSeatClick = (seatNumber) => {
    // Toggle seat selection
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatNumber)
        ? prevSelectedSeats.filter((seat) => seat !== seatNumber)
        : [...prevSelectedSeats, seatNumber]
    );
  };

  const handleBooking = () => {
    // Implement your booking logic here, e.g., send data to the server
    if (selectedSeats.length > 0 && selectedBus) {
      setBookingSuccess(true);
    }
  };

  return (
    <div>
      <h1>Bus Seat Booking</h1>
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
        <p>Selected Seats: {selectedSeats.join(', ')}</p>
        <label>Select Bus:</label>
        <input
          type="text"
          placeholder="Enter bus name"
          value={selectedBus}
          onChange={(e) => setSelectedBus(e.target.value)}
        />
        <button onClick={handleBooking} disabled={selectedSeats.length === 0 || !selectedBus}>
          Book Now
        </button>
        {bookingSuccess && (
          <p>
            Booking successful! Thank you. Bus: {selectedBus}, Seats: {selectedSeats.join(', ')}
          </p>
        )}
      </div>
    </div>
  );
};

export default BusSeatBooking;