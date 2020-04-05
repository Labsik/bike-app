import axios from "axios";

import { GET_BIKES, DELETE_BIKE, ADD_BIKE, RENT_BIKE } from "./types";

export const getBikes = () => (dispatch) => {
  axios
    .get("/api/bikes")
    .then((res) => dispatch({ type: GET_BIKES, payload: res.data }))
    .catch((err) => {
      console.log("err: ", err);
    });
};

export const deleteBike = (id) => (dispatch) => {
  axios
    .delete(`/api/bikes/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_BIKE,
        payload: id,
      })
    )
    .catch((err) => {
      console.log("err: ", err);
    });
};

export const addBike = (bike) => (dispatch) => {
  axios
    .post("/api/bikes", bike)
    .then((res) =>
      dispatch({
        type: ADD_BIKE,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log("err: ", err);
    });
};

export const rentBike = (id) => (dispatch) => {
  axios.put(`/api/bikes/${id}`).then((res) =>
    dispatch({
      type: RENT_BIKE,
      payload: id,
    })
  );
};

// export const rentBike = (id) => {
//   return {
//     type: RENT_BIKE,
//     payload: id,
//   };
// };
