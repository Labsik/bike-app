import { ADD_BIKE, DELETE_BIKE, RENT_BIKE, GET_BIKES } from "./types";

const initialState = {
  bikes: [],
};

export const bikesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BIKES:
      return {
        ...state,
        bikes: action.payload,
      };
    case ADD_BIKE:
      return {
        ...state,
        bikes: [...state.bikes, action.payload],
      };
    case DELETE_BIKE:
      return {
        ...state,
        bikes: state.bikes.filter((bike) => bike._id !== action.payload),
      };

    case RENT_BIKE:
      return {
        ...state,
        bikes: state.bikes.map((bike) =>
          bike._id === action.payload
            ? { ...bike, isRented: !bike.isRented }
            : bike
        ),
      };

    default:
      return state;
  }
};
