import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProd } from "../../reducer/hotelSlice";
import "./Reserved.css";
function ReservedComponent({ name, id, narxi, stayDay, startDay, jamiNarxi }) {
  const dispatch = useDispatch();
  const reserve = useSelector((state) => state.reserve.reserve);
  const navigate = useNavigate();
  const deleteProdBtn = () => {
    dispatch(deleteProd(id));
    if (reserve.length === 1) navigate("/");
  };
  return (
    <div className="reserved-card">
      <h2>{id}</h2>
      <h1>{name} mehmonxonasi</h1>
      <h3>narxi: {narxi} $</h3>
      <p> {stayDay} kunga band qilindi</p>
      <p> {startDay} kundan boshlab</p>

      <h3 className="jami-text">Jami: {jamiNarxi}$</h3>
      <button onClick={deleteProdBtn}>Delete</button>
    </div>
  );
}

export default ReservedComponent;
