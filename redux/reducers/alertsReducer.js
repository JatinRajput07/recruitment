import * as constants from "../constants";

const initialState = {
  loading: false,
  failed: "",
  success: "",
  modal : {
     type: null,
     isOpen: false,
     step : null
  }
};

export const alertsReducer = (state = initialState, action) => {
    
  switch (action.type) {

    case constants.LOADING:
      return {
        ...state,
        loading: action.payload,
        failed: '',
        success: ''
      };

    case constants.SUCCESS:
      return {
        ...state,
        success: action.payload,
        failed: "",
        loading: false
      };

    case constants.FAILED:
      return {
        ...state,
        failed: action.payload,
        success: "",
        loading: false
      };

      case constants.CLEAR:
      return {
        ...state,
        failed: "",
        success: "",
        loading: ""
      };
        
      case constants.SET_MODAL:
      return {
        ...state,
        modal: action.payload
      };


    default:
      return state;
  }
};
