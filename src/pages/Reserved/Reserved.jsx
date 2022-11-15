import React from "react";
import ReservedComponent from "./ReservedComponent";
import { useSelector } from "react-redux";
import "./Reserved.css";
function Reserved() {
  const reserve = useSelector((state) => state.reserve.reserve);

  return (
    <div className="reserved">
      <div className="reserve-cards">
        {reserve.length > 0 ? (
          reserve.map((hotel) => (
            <ReservedComponent key={hotel.id} {...hotel} />
          ))
        ) : (
          <h3>Mehmonxona tanlanmagan!</h3>
        )}
      </div>
    </div>
  );
}

export default Reserved;
