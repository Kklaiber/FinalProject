import axios from "axios";

import {
  ADD_COMMENT,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_COMMENTS,
  GET_COMMENT,
  COMMENT_LOADING,
  DELETE_COMMENT,
  EDIT_COMMENT
} from "./types";

// Get Comments
export const getComments = () => dispatch => {
  dispatch(setCommentLoading());
  axios
    .get("/api/posts")
    .then(res =>
      dispatch({
        type: GET_COMMENTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_COMMENTS,
        payload: null
      })
    );
};

// Get Comment
export const getComment = id => dispatch => {
  dispatch(setCommentLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: GET_COMMENT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_COMMENT,
        payload: null
      })
    );
};


// Add Comment
export const addComment = (postId, commentData) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/posts/comment/${postId}`, commentData)
    .then(res =>
      dispatch({
        type: GET_COMMENT,
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

// Delete Comment
export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(`/api/posts/comment/${postId}/${commentId}`)
    .then(res =>
      dispatch({
        type: GET_COMMENT,
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

// Edit Comment new work
export const editComment = (postId, commentId, updatedComment) => dispatch => {

  axios
  .put(`/api/posts/comment/${postId}/${commentId}`, {
    text: updatedComment,
  })
  .then(res => {
    console.log('resp', res);
    dispatch({
      type: EDIT_COMMENT,
      payload: ''
    });
  })
  .catch(err => {
    console.log('err', err);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  });
};

// Set loading state
export const setCommentLoading = () => {
  return {
    type: COMMENT_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
