import { useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { StateContext } from "./context/Context";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Reserved from "./pages/Reserved/Reserved";
import Votes from "./pages/Votes/Votes";
import { initialState, reducer } from "./reducer/Reducer";

function App() {
  const [dayInputVal, setDayInputVal] = useState(1);
  const [dateInputVal, setDateInputVal] = useState();

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider
      value={{
        state,
        dispatch,
        setDateInputVal,
        setDayInputVal,
        dateInputVal,
        dayInputVal,
      }}
    >
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/votes" element={<Votes />} />
          <Route path="/reserved" element={<Reserved />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </div>
    </StateContext.Provider>
  );
}

export default App;
