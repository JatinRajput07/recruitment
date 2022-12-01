import { io } from 'socket.io-client';
import * as constants from '../constants';

const postsMiddleware = store => next => action => {

    const state = store.getState();
    const socket = state.socket.socket;

    if(action.type == constants.ADD_COMMENT){

        socket.emit('add_comment', {
          "comment": action.payload.comment,
          "userId": state.auth.user.id,
          "postId": action.payload.postId
        }
        )

    }

    if(action.type == constants.LIKE_UNLIKE_POST){

        socket.emit('like_unlike_post', {
          "status": action.payload.status,
          "userId": state.auth.user.id,
          "postId": action.payload.postId
        }
        )

    }


    next(action)

}

export default postsMiddleware