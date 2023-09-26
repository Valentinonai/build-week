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
export const EXPERIENCES_MODAL_ON = "EXPERIENCES_MODAL_ON";
export const EXPERIENCES_MODAL_OFF = "EXPERIENCES_MODAL_OFF";

export const ADD_POSTS = "ADD_POSTS";
export const ADD_EXPERIENCES = "ADD_EXPERIENCES";

export const modalOffAction = () => ({ type: MODAL_OFF, payload: false });
export const modalOnAction = () => ({ type: MODAL_ON, payload: true });
export const handleClose = dispatch => dispatch(modalOffAction());
export const handleShow = dispatch => dispatch(modalOnAction());

export const experiencesModalOnAction = () => ({ type: EXPERIENCES_MODAL_ON, payload: true });
export const experiencesModalOffAction = () => ({ type: EXPERIENCES_MODAL_OFF, payload: false });
export const experiencesHandleClose = dispatch => dispatch(experiencesModalOffAction());
export const experiencesHandleShow = dispatch => dispatch(experiencesModalOnAction());

export const addPosts = data => ({ type: ADD_POSTS, payload: data });
export const addExperiences = data => ({ type: ADD_EXPERIENCES, payload: data });

//-------------------------PAYLOAD CREATORS-----------------------------
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

//------------------FETCH SECTION------------------------

//!---------------FETCH PROFILi---------------------
export const fetchProfileData = param => {
  return async dispatch => {
    dispatch(isLoadingTrueAction());
    try {
      console.log(param);
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${param}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
        }
      });
      if (resp.ok) {
        const data = await resp.json();
        dispatch(addCurrentUserDataAction(data));
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

//!-------------------FETCH MODIFICA USER DATA-----------------------------
export const fetchEditUser = objChanges => {
  return async dispatch => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "PUT",
        body: objChanges,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
        }
      });

      if (resp.ok) {
        const dataChanges = await resp.json();
        console.log(dataChanges, "datachanges");

        dispatch(addCurrentUserDataAction(dataChanges));
      } else {
        throw new Error(resp.status);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

//!----------------------------FETCH EXPERIENCES------------------------
export const fetchExperiencies = id => {
  return async dispatch => {
    dispatch(isLoadingTrueAction());
    try {
      console.log(id);
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
        }
      });
      if (resp.ok) {
        const data = await resp.json();
        dispatch(addExperiences(data));
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

//!------------------FETCH POST HOME-------------------------------------
export const fetchPost = () => {
  return async dispatch => {
    try {
      dispatch(isLoadingTrueAction());
      const risp = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
        }
      });
      if (risp.ok) {
        const data = await risp.json();
        dispatch(addPosts(data));
      } else {
        dispatch(hasErrorTrueAction());
        throw new Error(risp.status);
      }
    } catch (error) {
      dispatch(addErrorMessageAction(error.message));
      console.log("si e' verificato un errore", error.message);
    } finally {
      dispatch(isLoadingFalseAction());
    }
  };
};
