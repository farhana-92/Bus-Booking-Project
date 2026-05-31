import { useState } from "react";

export default function App() {
  const busData = [
    {
      id: 1,
      operator: "GreenLine Travels",
      from: "Chennai",
      to: "Bangalore",
      departure: "06:00 AM",
      arrival: "12:00 PM",
      fare: 899,
      seats: 18,
      rating: 4.8,
      amenities: ["WiFi", "Charging", "Water Bottle"],
    },
    {
      id: 2,
      operator: "Royal South Express",
      from: "Chennai",
      to: "Coimbatore",
      departure: "09:00 AM",
      arrival: "05:00 PM",
      fare: 799,
      seats: 12,
      rating: 4.5,
      amenities: ["WiFi", "Blanket"],
    },
    {
      id: 3,
      operator: "Kerala Fast Travels",
      from: "Kochi",
      to: "Bangalore",
      departure: "08:00 PM",
      arrival: "05:00 AM",
      fare: 1099,
      seats: 24,
      rating: 4.9,
      amenities: ["WiFi", "Charging", "Live Tracking"],
    },
    {
      id: 4,
      operator: "Madurai Express",
      from: "Madurai",
      to: "Chennai",
      departure: "07:30 PM",
      arrival: "04:30 AM",
      fare: 699,
      seats: 8,
      rating: 4.3,
      amenities: ["Water Bottle", "Charging"],
    },
  ];

  const cities = [
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Coimbatore",
    "Madurai",
    "Kochi",
  ];

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [results, setResults] = useState(busData);

  const searchBuses = () => {
    const filtered = busData.filter(
      (bus) =>
        (from === "" || bus.from === from) &&
        (to === "" || bus.to === to)
    );

    setResults(filtered);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h1>🚌 SouthBus</h1>
        <div>
          <a href="#">Home</a>
          <a href="#">Routes</a>
          <a href="#">Offers</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h2>Travel Across South India</h2>
        <p>
          Search and book buses with real-time seat availability,
          fares, ratings and amenities.
        </p>

        <div className="search-box">
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            <option value="">From</option>
            {cities.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>

          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            <option value="">To</option>
            {cities.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            type="number"
            min="1"
            max="10"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          />

          <button onClick={searchBuses}>
            Search Buses
          </button>
        </div>
      </section>

      <section className="results">
        <div className="heading">
          <h3>Available Buses</h3>
          <p>{results.length} buses found</p>
        </div>

        {results.map((bus) => (
          <div key={bus.id} className="bus-card">
            <div className="left">
              <h3>{bus.operator}</h3>

              <p>
                <strong>{bus.from}</strong> ➜
                <strong> {bus.to}</strong>
              </p>

              <p>
                Departure: {bus.departure}
              </p>

              <p>
                Arrival: {bus.arrival}
              </p>

              <div className="amenities">
                {bus.amenities.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="right">
              <h2>₹{bus.fare}</h2>

              <p>⭐ {bus.rating}</p>

              <p className="seat-count">
                {bus.seats} Seats Available
              </p>

              <button>Book Now</button>
            </div>
          </div>
        ))}
      </section>

      <footer>
        © 2026 SouthBus Booking Platform
      </footer>
    </div>
  );
}