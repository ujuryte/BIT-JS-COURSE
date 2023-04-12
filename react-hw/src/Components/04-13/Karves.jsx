import React, { useState } from "react";
import rand from "../../Functions/rand";


export default function Karves({karves}) {
  const [cows, setCows] = useState([]);

  const generateCows = () => {
    const count = rand(5,25)
    const newCows = [];

    for (let i = 0; i < count; i++) {
      const id = "K" + rand(1000000, 9999999);
      newCows.push(id);
    }

    setCows(newCows);
  };

  const toggleCowPosition = (id) => {
    setCows((prevCows) =>
      prevCows.map((cowId) =>
        cowId === id ? (cowId.endsWith("R") ? cowId.replace("R", "L") : cowId.replace("L", "R")) : cowId
      )
    );
  };

  return (
    <div>
      <h2>Cows</h2>
      <button onClick={generateCows}>Karves i ganykla</button>
      <div>
        {cows.map((cowId) => (
          <div
            key={cowId}
            onClick={() => toggleCowPosition(cowId)}
            style={{
              fontSize: '10px',
              display: "inline-block",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "brown",
              color: "white",
              textAlign: "center",
              lineHeight: "50px",
              marginRight: "5px",
              cursor: "pointer",
            }}
          >
            {cowId}
          </div>
        ))}
      </div>
    </div>
  );
};
