import React, { useState } from "react";
import rand from "../../Functions/rand";


export default function Sheep({avys}) {
  const [sheep, setSheep] = useState([]);

  const generateSheep = _ => {
    const count = rand(5,25)
    const newSheep = [];

    for (let i = 0; i < count; i++) {
      const id = "A" + rand(1000000, 9999999); 
      newSheep.push(id);
    }

    setSheep(newSheep);
  };

  const toggleSheepPosition = (id) => {
    setSheep((prevSheep) =>
      prevSheep.map((sheepId) =>
        sheepId === id ? (sheepId.endsWith("L") ? sheepId.replace("L", "R") : sheepId.replace("R", "L")) : sheepId
      )
    );
  };

  return (
    <div>
      <h2>Sheep</h2>
      <button onClick={generateSheep}>Avys i ganykla</button>
      <div>
        {sheep.map((sheepId) => (
          <div
            key={sheepId}
            onClick={() => toggleSheepPosition(sheepId)}
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
            {sheepId}
          </div>
        ))}
      </div>
    </div>
  );
};
