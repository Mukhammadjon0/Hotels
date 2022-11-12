import React, { useContext } from "react";
import { StateContext } from "../../context/Context";
import "./Hotels.css";
function Hotels({ name, narxi, id, hotel }) {
  const { state, dispatch } = useContext(StateContext);
  const reserveBtn = () => {
    const check = state.reserve.some((item) => item.id === id);
    if (check) alert("bu oldin qoshilgan");
    else dispatch({ type: "RESERVE", payload: hotel });
  };
  const { setDateInputVal, setDayInputVal } = useContext(StateContext);


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
      />{" "}
      <span>kun</span>
      <div className="buyurtma-kuni">
        <label>Start day</label>
        <input
          required
          onChange={(e) => setDateInputVal(e.target.value)}
          type="date"
        />
      </div>
      <button onClick={reserveBtn}>Reserve</button>
    </div>
  );
}

export default Hotels;
