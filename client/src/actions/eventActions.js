import axios from "axios";

import {
  ADD_EVENT,
  GET_ERRORS,
  GET_EVENTS,
  EVENT_LOADING,
  DELETE_EVENT,
  GET_EVENT,
  CLEAR_ERRORS
} from "./types";

//ADD EVENT
export const addEvent = eventData => dispatch => {
  dispatch(clearErrors());
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

//GET EVENT
export const getEvent = id => dispatch => {
  dispatch(setEventLoading());

  axios
    .get(`/api/events/${id}`)
    .then(res =>
      dispatch({
        type: GET_EVENT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_EVENT,
        payload: null
      })
    );
};

//DELETE EVENT
export const deleteEvent = id => dispatch => {
  axios
    .delete(`/api/events/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_EVENT,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//ADD "GOING" TO EVENT
export const goingToEvent = id => dispatch => {
  axios
    .post(`/api/events/going/${id}`)
    .then(res => dispatch(getEvents()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//ADD "NOT GOING" TO EVENT
export const notGoingToEvent = id => dispatch => {
  axios
    .post(`/api/events/notGoing/${id}`)
    .then(res => dispatch(getEvents()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//ADD "INTERESTED" IN EVENT
export const interestedInEvent = id => dispatch => {
  axios
    .post(`/api/events/interested/${id}`)
    .then(res => dispatch(getEvents()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//ADD COMMENT
export const addComment = (eventId, commentData) => dispatch => {
  dispatch(clearErrors());

  axios
    .post(`/api/events/comment/${eventId}`, commentData)
    .then(res =>
      dispatch({
        type: GET_EVENT,
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

//DELETE COMMENT
export const deleteComment = (eventId, commentId) => dispatch => {
  axios
    .delete(`/api/events/comment/${eventId}/${commentId}`)
    .then(res =>
      dispatch({
        type: GET_EVENT,
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

//SET LOADING STATE
export const setEventLoading = () => {
  return {
    type: EVENT_LOADING
  };
};

//CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
