// App.js
import React, { useState } from "react";

const App = () => {
  const vipSeat = new Array(25).fill(0);
  for (let i = 0; i < vipSeat.length; i++) {
    vipSeat[i] = `vipSeat${i + 1}`;
  }
  const economySeat = new Array(36).fill(0);
  for (let i = 0; i < economySeat.length; i++) {
    economySeat[i] = `economySeat${i + 1}`;
  }

  const regularSeat = new Array(49).fill(0);
  for (let i = 0; i < regularSeat.length; i++) {
    regularSeat[i] = `regularSeat${i + 1}`;
  }

  const [seatsSelected, SetseatsSelected] = useState([]);

  const checkifSelectionPossible = (seatsSelected) => {
    return seatsSelected.length < 5;
  };

  const bookTicketForConcert = (seat) => {
    if (checkifSelectionPossible(seatsSelected)) {
      if (!seatsSelected.includes(seat)) {
        SetseatsSelected((prevSeat) => [seat, ...prevSeat]);
      } else {
        SetseatsSelected((prevSeat) =>
          prevSeat.filter((seatRemove) => seatRemove !== seat)
        );
      }
    } else {
      alert(`You have already booked the 5 seats for a user"${seatsSelected}`);
    }
  };
  const clearSeats = () => {
    SetseatsSelected([]);
  };

  return (
    <>
      <h1>Concert Seat Selection</h1>
      <h2>
        Seats Booked {seatsSelected.length}: {seatsSelected.join(",  ")}
      </h2>
      <h3 onClick={() => clearSeats()}>Clear All Seats</h3>
      <div className="concert">
        {vipSeat.map((seat) => {
          return (
            <div
              key={seat}
              className="vip-seat"
              onClick={() => bookTicketForConcert(seat)}
            >
              {seat}
            </div>
          );
        })}
      </div>
      <div className="concert">
        {economySeat.map((economySeat) => {
          return (
            <div
              key={economySeat}
              className="economy-seat"
              onClick={() => bookTicketForConcert(economySeat)}
            >
              {economySeat}
            </div>
          );
        })}
      </div>
      <div className="concert">
        {regularSeat.map((regularSeat) => {
          return (
            <div
              key={regularSeat}
              className="regular-seat"
              onClick={() => bookTicketForConcert(regularSeat)}
            >
              {regularSeat}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
