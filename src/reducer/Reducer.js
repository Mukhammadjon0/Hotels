export const initialState = {
  reserve: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "RESERVE":
      return (state = {
        ...state,
        reserve: [...state.reserve, action.payload],
      });
    case "DELETE":
      const filteredReserve = state.reserve.filter(
        (items) => items.id !== action.payload
      );
      return (state = {
        reserve: filteredReserve,
      });
    default:
      return state;
  }
};
