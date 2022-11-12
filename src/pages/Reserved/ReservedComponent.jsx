import React from "react";
import { useContext } from "react";
import { StateContext } from "../../context/Context";
import "./Reserved.css";
function ReservedComponent({ name, id, narxi }) {
  const { dayInputVal, dateInputVal, dispatch } = useContext(StateContext);
  const deleteBtn = () => {
    dispatch({ type: "DELETE", payload: id });
  };
  return (
    <div className="reserved-card">
      <h2>{id}</h2>
      <h1>{name} mehmonxonasi</h1>
      <h3>narxi: {narxi} $</h3>
      <p>{dayInputVal} kunga band qilindi</p>
      <p>{dateInputVal} kundan boshlab</p>
      <button onClick={deleteBtn}>Delete</button>
    </div>
  );
}

export default ReservedComponent;
