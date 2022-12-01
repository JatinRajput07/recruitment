import { io } from 'socket.io-client';
import { SOCKET_URI } from '../../pages/_app';
import { setMessages, updateSocketObject } from '../actions/chatActions';
import * as constants from '../constants';

const chatMiddleware = store => next => action => {

    const state = store.getState();
    const socket = state.socket.socket;

    if(action.type == constants.SEND_MESSAGE){

        // alert('hi')

        socket.emit('send_message', {
            "senderId": action.payload.senderId,
            "receiverId": action.payload.receiverId,
            "messageType": action.payload.messageType, 
            "message": action.payload.message,
            "groupId": action.payload.groupId,
          }
          )

    }

    if(action.type == constants.OPEN_WEBSOCKET){

      const socket = io.connect(SOCKET_URI);

      store.dispatch(updateSocketObject(socket));

      socket.emit('connect_user',  {
        "userId": state.auth?.user?.id
      })


      
      
    }

    if(action.type == constants.GET_CHAT_LISTING){

       let data = socket.emit('chat_listing',  {
            "userId": state.auth?.user?.id
          })

       
    }

    if(action.type == constants.GET_MESSAGES){
    

          socket.emit('get_message',  {
            "senderId": state.auth.user.id,
            "receiverId": action.payload.otheruserid,
            "groupId": action.payload.groupId || 0,
            // "groupId": 
          })
    }

    if(action.type == constants.CLEAR_CHAT){
     

          socket.emit('delete_chat',  {
            "senderId": state.auth.user.id,
            "receiverId": action.payload.otheruserid
          })
    }

    if(action.type == constants.BLOCK_UNBLOCK_USER){
     

          socket.emit('blockUnblock_user',  {
            "userid": state.auth.user.id,
            "user2Id": action.payload.otheruserid,
            "status": action.payload.status
          })
    }

    if(action.type == constants.CHECK_IS_BLOCKED){
     

          socket.emit('is_blocked',  {
            "userid": state.auth.user.id,
            "user2Id": action.payload.otheruserid
          })
    }

    if(action.type == constants.CREATE_GROUP){
     

          socket.emit('create_group',  {
            "name": action.payload.name,
            "description": '',
            "image": action.payload.image,
            "user_id": state.auth.user.id,
            "groupMembers": action.payload.groupMembers,
            "groupId": action.payload.groupId
          })

    }

    if(action.type == constants.LEAVE_GROUP){
     

          socket.emit('exit_group',  {
            "userId": action.payload.userId,
            "groupId": action.payload.groupId
          });

    }

    if(action.type == constants.GET_GROUP_DETAIL){
     

          socket.emit('get_group_detail',  {
            "groupId": action.payload.groupId
          });

    }

    if(action.type == constants.JOIN_ROOM){
     

          socket.emit('join_new_room',  {
            "roomId": action.payload.roomId,
          })

    }

    next(action)

}

export default chatMiddleware