export const ADD_CURRENT_USER_DATA = "ADD_CURRENT_USER_DATA";
export const IS_LOADING_TRUE = "IS_LOADING_TRUE";
export const IS_LOADING_FALSE = "IS_LOADING_FALSE";
export const HAS_ERROR_TRUE = "HAS_ERROR_TRUE";
export const HAS_ERROR_FALSE = "HAS_ERROR_FALSE";
export const ADD_ERROR_MESSAGE = "ADD_ERROR_MESSAGE";

export const isLoadingTrueAction = () => ({
  type: IS_LOADING_TRUE,
  payload: true,
});

export const isLoadingFalseAction = () => ({
  type: IS_LOADING_FALSE,
  payload: false,
});

export const hasErrorTrueAction = () => ({
  type: HAS_ERROR_TRUE,
  payload: true,
});

export const hasErrorFalseAction = () => ({
  type: HAS_ERROR_FALSE,
  payload: false,
});

export const addErrorMessageAction = (string) => ({
  type: ADD_ERROR_MESSAGE,
  payload: string,
});

export const addCurrentUserDataAction = (dataUser) => ({
  type: ADD_CURRENT_USER_DATA,
  payload: dataUser,
});

export const fetchProfileData = () => {
  return async (dispatch) => {
    dispatch(isLoadingTrueAction());
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o",
        },
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
