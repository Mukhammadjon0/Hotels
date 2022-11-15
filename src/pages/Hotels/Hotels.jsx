import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToReserved,
} from "../../reducer/hotelSlice";
import "./Hotels.css";
function Hotels({ name, narxi, id, hotel }) {
  const [startDayInputVal, setStartDayInputVal] = useState("");
  const [dayInputVal, setDayInputVal] = useState("");
  const dispatch = useDispatch();

  const reserve = useSelector((state) => state.reserve.reserve);

  const addToReservedBtn = (e) => {
    e.preventDefault();
    const check = reserve.some((item) => item.id === id);
    if (check) {
      alert("bu mehmonxona qoshilgan");
      return;
    }
    const startDay=startDayInputVal
    const stayDay=dayInputVal
    const jamiNarxi=dayInputVal*narxi

    const payload = {
      ...hotel,
      startDay,
      jamiNarxi,
      stayDay,
    };
    dispatch(addToReserved(payload))
  };

  return (
    <div className="hotel">
      <h1>{id}</h1>
      <h2>{name} mehmonxonasi</h2>
      <h3>narxi: {narxi} $</h3>
      <input
        required
        onChange={(e) => setDayInputVal(e.target.value)}
        type="number"
        placeholder="yashash muddati..."
      />
      <span>kun</span>
      <div className="buyurtma-kuni">
        <label>Start day</label>
        <input
          required
          onChange={(e) => setStartDayInputVal(e.target.value)}
          type="date"
        />
      </div>
      <button onClick={addToReservedBtn}>Reserve</button>
    </div>
  );
}

export default Hotels;
