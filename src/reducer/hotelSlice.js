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
    deleteProd: (state, action) => {
      const filteredUsers = state.reserve.filter(
        (item) => item.id !== action.payload
      );
      state.reserve = filteredUsers;
    },
    addDayToHotel: (state, action) => {
      const addedDayToHotel = state.reserve.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            stayDay: action.payload.day,
          };
        } else return item;
      });
      state.reserve = addedDayToHotel;
    },
    addStartDay: (state, action) => {
      const addedStartDay = state.reserve.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            startDay: action.payload.startDay,
          };
        } else return item;
      });
      state.reserve = addedStartDay;
    },
  },
});

export const { addToReserved, deleteProd, addDayToHotel, addStartDay } = hotelSlice.actions;
export default hotelSlice.reducer;
