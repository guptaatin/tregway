import React from 'react';
import './Flights.css';

const Flights = () => {
    return (
        <form className="booking-form">
            <div>
                <label>From</label>
                <input type="text" placeholder="Delhi" />
            </div>
            <div>
                <label>To</label>
                <input type="text" placeholder="Bengaluru" />
            </div>
            <div>
                <label>Departure</label>
                <input type="date" />
            </div>
            <div>
                <label>Return</label>
                <input type="date" />
            </div>
            <div>
                <label>Travellers & Class</label>
                <input type="text" placeholder="1 Traveller, Economy" />
            </div>
            <button type="submit">Search</button>
        </form>
    );
};

export default Flights;
