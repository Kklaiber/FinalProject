import axios from "axios";

import { ADD_EVENT, GET_ERRORS, GET_EVENTS, EVENT_LOADING } from "./types";

//ADD EVENT
export const addEvent = eventData => dispatch => {
  axios
    .post("/api/events", eventData)
    .then(res =>
      dispatch({
        type: ADD_EVENT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//GET EVENTS
export const getEvents = () => dispatch => {
  dispatch(setEventLoading());

  axios
    .get("/api/events")
    .then(res =>
      dispatch({
        type: GET_EVENTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_EVENTS,
        payload: null
      })
    );
};

//SET LOADING STATE
export const setEventLoading = () => {
  return {
    type: EVENT_LOADING
  };
};
