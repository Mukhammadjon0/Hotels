import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Products.css";
function Products() {
  const [inputVal, setInputVal] = useState(2);
  const [id, setId] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);
  console.log(id);
  const handleSubmit = (e) => {
    e.preventDefault();
    setId(Number(inputVal));
  };
  return (
    <div className="kard">
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setInputVal(e.target.value)} />
        <button>Find</button>
      </form>
      <img width={"200px"} src={data.image} alt="product" />
    </div>
  );
}

export default Products;
