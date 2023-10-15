import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [light, setLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prevLight) => {
        if (prevLight === "red") {
          return "green";
        } else if (prevLight === "green") {
          return "yellow";
        } else if (prevLight === "yellow") {
          return "red";
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="traffic-light">
      <div className={`light red ${light === "red" ? "active" : ""}`}></div>
      <div
        className={`light yellow ${light === "yellow" ? "active" : ""}`}
      ></div>
      <div className={`light green ${light === "green" ? "active" : ""}`}></div>
    </div>
  );
};

export default TrafficLight;
