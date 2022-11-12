import React from "react";
import { hotels } from "../../data/data";
import Hotels from "../Hotels/Hotels";
import "./Home.css";
function Home() {
  
  return (
    <div className="hotels-list">
      <h1>Hello</h1>
      {hotels.map((item) => (
        <Hotels
          key={item.id}
          hotel={item}
          {...item}
        />
      ))}
    </div>
  );
}
export default Home;
