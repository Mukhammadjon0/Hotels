import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reserve: JSON.parse(localStorage.getItem("reserve")) || [],
};

const hotelSlice = createSlice({
  name: "reserve",
  initialState: initialState,
  reducers: {
    addToReserved: (state, action) => {
      return (state = {
        ...state,
        reserve: [...state.reserve, action.payload],
      });
    },
    deleteHotel: (state, action) => {
      const filteredHotels = state.reserve.filter(
        (item) => item.id !== action.payload
      );
      state.reserve = filteredHotels;
    },
  },
});

export const { addToReserved, deleteHotel } = hotelSlice.actions;
export default hotelSlice.reducer;
