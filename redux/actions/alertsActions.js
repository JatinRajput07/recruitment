import * as actionType from "../constants";

export const setLoading = (data) => ({
    type: actionType.LOADING,
    payload: data
});

export const setFailed = (data) =>
 ({
    type: actionType.FAILED,
    payload: data
});

export const setSuccess = (data) => ({
    type: actionType.SUCCESS,
    payload: data
});

export const clearAlerts = () => ({
    type: actionType.CLEAR,
});

export const setModal = (payload)=> ({
     type: actionType.SET_MODAL,
     payload
})

export const showSuccessAlert = (message) => (dispatch) => {
    dispatch(setSuccess(message));
    setTimeout(() => {
         dispatch(clearAlerts());
    }, 500);

}

export const showErrorAlert = (message) => (dispatch) => {
    dispatch(setFailed(message));
    setTimeout(() => {
         dispatch(clearAlerts());
    }, 500);

}

export const formTabs = (data) => ({
    type: actionType.FORM_TABS,
    payload: data
});