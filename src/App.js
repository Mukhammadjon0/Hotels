import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Reserved from "./pages/Reserved/Reserved";
import Votes from "./pages/Votes/Votes";

function App() {
  const reserve = useSelector((state) => state.reserve.reserve);
  console.log(reserve)

  useEffect(() => {
    localStorage.setItem("reserve", JSON.stringify(reserve));
  }, [reserve]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/votes" element={<Votes />} />
        <Route path="/reserved" element={<Reserved />} />
        <Route path="/product" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
