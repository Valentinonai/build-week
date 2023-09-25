export const ADD_CURRENT_USER_DATA = "ADD_CURRENT_USER_DATA";
export const IS_LOADING_TRUE = "IS_LOADING_TRUE";
export const IS_LOADING_FALSE = "IS_LOADING_FALSE";
export const HAS_ERROR_TRUE = "HAS_ERROR_TRUE";
export const HAS_ERROR_FALSE = "HAS_ERROR_FALSE";
export const ADD_ERROR_MESSAGE = "ADD_ERROR_MESSAGE";

export const JOBS = "JOBS";
export const PROFILE = "PROFILE";
export const ALL_EXPERIENCES = "ALL_EXPERIENCES";
export const CHANGE_EXP = "CHANGE_EXP";
export const POST_EXPERIENCES = "POST_EXPERIENCES";
export const ALL_PROFILE = "ALL_PROFILE";
export const GET_FORM_DATA = "GET_FORM_DATA";

export const MODAL_OFF = "MODAL_OFF";
export const MODAL_ON = "MODAL_ON";

export const modalOffAction = () => ({ type: MODAL_OFF, payload: false });
export const modalOnAction = () => ({ type: MODAL_ON, payload: true });
export const handleClose = dispatch => dispatch(modalOffAction());
export const handleShow = dispatch => dispatch(modalOnAction());

export const isLoadingTrueAction = () => ({
  type: IS_LOADING_TRUE,
  payload: true
});

export const isLoadingFalseAction = () => ({
  type: IS_LOADING_FALSE,
  payload: false
});

export const hasErrorTrueAction = () => ({
  type: HAS_ERROR_TRUE,
  payload: true
});

export const hasErrorFalseAction = () => ({
  type: HAS_ERROR_FALSE,
  payload: false
});

export const addErrorMessageAction = string => ({
  type: ADD_ERROR_MESSAGE,
  payload: string
});

export const addCurrentUserDataAction = dataUser => ({
  type: ADD_CURRENT_USER_DATA,
  payload: dataUser
});

export const fetchProfileData = () => {
  return async dispatch => {
    dispatch(isLoadingTrueAction());
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
        }
      });
      if (resp.ok) {
        const data = await resp.json();
        console.log(data);
      } else {
        dispatch(hasErrorTrueAction());
        throw new Error(resp.status);
      }
    } catch (error) {
      dispatch(addErrorMessageAction(error.message));
      console.log("si e' verificato un errore", error.message);
    } finally {
      dispatch(isLoadingFalseAction());
    }
  };
};

export const getExperiencesAction = userID => {
  return async dispatch => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + userID + "/experiences", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
        }
      });
      if (response.ok) {
        const allExperiences = await response.json();
        dispatch({ type: ALL_EXPERIENCES, payload: allExperiences });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchJobAction = search => {
  return async dispatch => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=${search}", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
        }
      });
      if (response.ok) {
        const jobs = await response.json();
        dispatch({ type: JOBS, payload: jobs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const putExperienceAction = (newData, userID, expID) => {
  return async dispatch => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + userID + "/experiences/" + expID,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
          },
          body: JSON.stringify(newData)
        }
      );
      if (response.ok) {
        const newExpData = await response.json();
        dispatch({ type: CHANGE_EXP, payload: newExpData });
        dispatch(getExperiencesAction(userID));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteExperiencesAction = (userID, expID) => {
  return async dispatch => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + userID + "/experiences/" + expID,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
          }
        }
      );
      if (response.ok) {
        alert("Esperienza eliminata!");
        dispatch(getExperiencesAction(userID));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postExperiencesAction = (newExp, userID) => {
  return async dispatch => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + userID + "/experiences/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
        },
        body: JSON.stringify(newExp)
      });
      if (response.ok) {
        const newExperience = await response.json();
        dispatch({ type: POST_EXPERIENCES, payload: newExperience });
        dispatch(getExperiencesAction(userID));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getFormAction = content => ({ type: GET_FORM_DATA, payload: content });

export const editProfileAction = newData => {
  return async dispatch => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
        },
        body: JSON.stringify(newData)
      });
      if (response.ok) {
        const newProfileData = await response.json();
        dispatch({ type: PROFILE, payload: newProfileData });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editProfileImageAction = (dataImage, userID) => {
  return async dispatch => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + userID + "/picture", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
        },
        body: dataImage
      });
      if (response.ok) {
        const newProfileImageData = await response.json();
        dispatch({ type: PROFILE, payload: newProfileImageData });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
