export const initialDataConstants = {
  GET_ALL_INITIAL_DATA_REQUEST: "GET_ALL_INITIAL_DATA_REQUEST",
  GET_ALL_INITIAL_DATA_SUCCESS: "GET_ALL_INITIAL_DATA_SUCCESS",
  GET_ALL_INITIAL_DATA_FAILURE: "GET_ALL_INITIAL_DATA_FAILURE",
};

export const authConstants = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",

  REGISTER_REQUEST: "REGISTER_REQUEST",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAILURE: "REGISTER_FAILURE",

  // LOGOUT_REQUEST: "LOGOUT_REQUEST",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  // LOGOUT_FAILURE: "LOGOUT_FAILURE",

  UPDATE_INFORMATION_SUCCESS: "UPDATE_INFORMATION_SUCCESS",

  CHANGE_INFORMATION_REQUEST: "CHANGE_INFORMATION_REQUEST",
  CHANGE_INFORMATION_SUCCESS: "CHANGE_INFORMATION_SUCCESS",
  CHANGE_INFORMATION_FAILURE: "CHANGE_INFORMATION_FAILURE",

  GET_INFORMATION_REQUEST: "GET_INFORMATION_REQUEST",
  GET_INFORMATION_SUCCESS: "GET_INFORMATION_SUCCESS",
  GET_INFORMATION_FAILURE: "GET_INFORMATION_FAILURE",

  CHANGE_PASSWORD_REQUEST: "CHANGE_PASSWORD_REQUEST",
  CHANGE_PASSWORD_SUCCESS: "CHANGE_PASSWORD_SUCCESS",
  CHANGE_PASSWORD_FAILURE: "CHANGE_PASSWORD_FAILURE",

  CHANGE_AVATAR_REQUEST: "CHANGE_AVATAR_REQUEST",
  CHANGE_AVATAR_SUCCESS: "CHANGE_AVATAR_SUCCESS",
  CHANGE_AVATAR_FAILURE: "CHANGE_AVATAR_FAILURE",
};


export const postConstants = {
  GET_ALL_POST_REQUEST: "GET_ALL_POST_REQUEST",
  GET_ALL_POST_SUCCESS: "GET_ALL_POST_SUCCESS",
  GET_ALL_POST_FAILURE: "GET_ALL_POST_FAILURE",

  GET_ALL_POST_REQUEST_BY_TOKEN: "GET_ALL_POST_REQUEST_BY_TOKEN",
  GET_ALL_POST_SUCCESS_BY_TOKEN: "GET_ALL_POST_SUCCESS_BY_TOKEN",
  GET_ALL_POST_FAILURE_BY_TOKEN: "GET_ALL_POST_FAILURE_BY_TOKEN",

  ADD_POST_REQUEST: "ADD_POST_REQUEST",
  ADD_POST_SUCCESS: "ADD_POST_SUCCESS",
  ADD_POST_FAILURE: "ADD_POST_FAILURE",

  UPDATE_POST_REQUEST: "UPDATE_POST_REQUEST",
  UPDATE_POST_SUCCESS: "UPDATE_POST_SUCCESS",
  UPDATE_POST_FAILURE: "UPDATE_POST_FAILURE",

  DELETE_POST_REQUEST: "DELETE_POST_REQUEST",
  DELETE_POST_SUCCESS: "DELETE_POST_SUCCESS",
  DELETE_POST_FAILURE: "DELETE_POST_FAILURE",
};

export const tutorConstants = {
  GET_ALL_TUTOR_REQUEST: "GET_ALL_TUTOR_REQUEST",
  GET_ALL_TUTOR_SUCCESS: "GET_ALL_TUTOR_SUCCESS",
  GET_ALL_TUTOR_FAILURE: "GET_ALL_TUTOR_FAILURE",

  UPDATE_TUTOR_REQUEST: "UPDATE_TUTOR_REQUEST",
  UPDATE_TUTOR_SUCCESS: "UPDATE_TUTOR_SUCCESS",
  UPDATE_TUTOR_FAILURE: "UPDATE_TUTOR_FAILURE",

};

export const suggestionConstants = {
  GET_ALL_SUGGESTION_REQUEST: "GET_ALL_SUGGESTION_REQUEST",
  GET_ALL_SUGGESTION_SUCCESS: "GET_ALL_SUGGESTION_SUCCESS",
  GET_ALL_SUGGESTION_FAILURE: "GET_ALL_SUGGESTION_FAILURE",

  GET_ALL_SUGGESTION_REQUEST_BY_STUDENT: "GET_ALL_SUGGESTION_REQUEST_BY_STUDENT",
  GET_ALL_SUGGESTION_SUCCESS_BY_STUDENT: "GET_ALL_SUGGESTION_SUCCESS_BY_STUDENT",
  GET_ALL_SUGGESTION_FAILURE_BY_STUDENT: "GET_ALL_SUGGESTION_FAILURE_BY_STUDENT",

  ADD_SUGGESTION_REQUEST: "ADD_SUGGESTION_REQUEST",
  ADD_SUGGESTION_SUCCESS: "ADD_SUGGESTION_SUCCESS",
  ADD_SUGGESTION_FAILURE: "ADD_SUGGESTION_FAILURE",

  ACCEPT_SUGGESTION_REQUEST: "ACCEPT_SUGGESTION_REQUEST",
  ACCEPT_SUGGESTION_SUCCESS: "ACCEPT_SUGGESTION_SUCCESS",
  ACCEPT_SUGGESTION_FAILURE: "ACCEPT_SUGGESTION_FAILURE",

  REFUSE_SUGGESTION_REQUEST: "REFUSE_SUGGESTION_REQUEST",
  REFUSE_SUGGESTION_SUCCESS: "REFUSE_SUGGESTION_SUCCESS",
  REFUSE_SUGGESTION_FAILURE: "REFUSE_SUGGESTION_FAILURE",
};

export const invitationConstants = {
  GET_ALL_INVITATION_REQUEST: "GET_ALL_INVITATION_REQUEST",
  GET_ALL_INVITATION_SUCCESS: "GET_ALL_INVITATION_SUCCESS",
  GET_ALL_INVITATION_FAILURE: "GET_ALL_INVITATION_FAILURE",

  GET_ALL_INVITATION_REQUEST_BY_TUTOR: "GET_ALL_INVITATION_REQUEST_BY_TUTOR",
  GET_ALL_INVITATION_SUCCESS_BY_TUTOR: "GET_ALL_INVITATION_SUCCESS_BY_TUTOR",
  GET_ALL_INVITATION_FAILURE_BY_TUTOR: "GET_ALL_INVITATION_FAILURE_BY_TUTOR",

  ADD_INVITATION_REQUEST: "ADD_INVITATION_REQUEST",
  ADD_INVITATION_SUCCESS: "ADD_INVITATION_SUCCESS",
  ADD_INVITATION_FAILURE: "ADD_INVITATION_FAILURE",

  ACCEPT_INVITATION_REQUEST: "ACCEPT_INVITATION_REQUEST",
  ACCEPT_INVITATION_SUCCESS: "ACCEPT_INVITATION_SUCCESS",
  ACCEPT_INVITATION_FAILURE: "ACCEPT_INVITATION_FAILURE",

  REFUSE_INVITATION_REQUEST: "REFUSE_INVITATION_REQUEST",
  REFUSE_INVITATION_SUCCESS: "REFUSE_INVITATION_SUCCESS",
  REFUSE_INVITATION_FAILURE: "REFUSE_INVITATION_FAILURE",
};

export const commentConstants = {
  GET_ALL_COMMENT_REQUEST: "GET_ALL_COMMENT_REQUEST",
  GET_ALL_COMMENT_SUCCESS: "GET_ALL_COMMENT_SUCCESS",
  GET_ALL_COMMENT_FAILURE: "GET_ALL_COMMENT_FAILURE",

  ADD_COMMENT_REQUEST: "ADD_COMMENT_REQUEST",
  ADD_COMMENT_SUCCESS: "ADD_COMMENT_SUCCESS",
  ADD_COMMENT_FAILURE: "ADD_COMMENT_FAILURE",

  UPDATE_COMMENT_REQUEST: "UPDATE_COMMENT_REQUEST",
  UPDATE_COMMENT_SUCCESS: "UPDATE_COMMENT_SUCCESS",
  UPDATE_COMMENT_FAILURE: "UPDATE_COMMENT_FAILURE",

  DELETE_COMMENT_REQUEST: "DELETE_COMMENT_REQUEST",
  DELETE_COMMENT_SUCCESS: "DELETE_COMMENT_SUCCESS",
  DELETE_COMMENT_FAILURE: "DELETE_COMMENT_FAILURE",
};
// export const commentConstants = {
//   GET_ALL_COMMENT_REQUEST: "GET_ALL_COMMENT_REQUEST",
//   GET_ALL_COMMENT_SUCCESS: "GET_ALL_COMMENT_SUCCESS",
//   GET_ALL_COMMENT_FAILURE: "GET_ALL_COMMENT_FAILURE",

//   ADD_COMMENT_REQUEST: "ADD_COMMENT_REQUEST",
//   ADD_COMMENT_SUCCESS: "ADD_COMMENT_SUCCESS",
//   ADD_COMMENT_FAILURE: "ADD_COMMENT_FAILURE",

//   UPDATE_COMMENT_REQUEST: "UPDATE_COMMENT_REQUEST",
//   UPDATE_COMMENT_SUCCESS: "UPDATE_COMMENT_SUCCESS",
//   UPDATE_COMMENT_FAILURE: "UPDATE_COMMENT_FAILURE",

//   DELETE_COMMENT_REQUEST: "DELETE_COMMENT_REQUEST",
//   DELETE_COMMENT_SUCCESS: "DELETE_COMMENT_SUCCESS",
//   DELETE_COMMENT_FAILURE: "DELETE_COMMENT_FAILURE",
// };