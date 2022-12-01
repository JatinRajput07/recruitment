import * as constants from '../constants';

const initialState = {
    socket: null,
    socketConnected: false,
};

export default function (state = initialState, action) {
    switch(action.type) {
      case constants.OPEN_WEBSOCKET:
        return {
          ...state,
          socketConnected: true,
        }
      case constants.UPDATE_SOCKET_OBJECT:
        return {
          ...state,
          socket: action.payload,
        }
      default:
        return state
    }
  }