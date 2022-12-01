import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { IMGURL } from '../../../../helpers/apiHelper';
import { getMessages, setChatData, setMessages, setType } from '../../../../redux/actions/chatActions';

const ChatListingItem = ({item, isAddGroup, isAdmin}) => {

  const dispatch = useDispatch();
  const {chat, socket} = useSelector(state => state);

  useEffect(() => {
    
    socket.socket.on('get_data_message',(data => {      
         console.log(data,'data')
         dispatch(setMessages(data))
    }))

  }, [])
  
  

  const viewChat = () => {
     dispatch(setType(2));
     console.log('item', item);
     dispatch(setChatData(item));
    
  }

  console.log(isAddGroup,"<<<<<<<<<<<<<<<<<<<???????????????????? is Add Group")

  return (
    <li className={`${item.isOnline ? '':''}`} onClick= {()=>{
       !isAddGroup && viewChat()
       }}>
    {/* // <li className={`${item.isOnline ? '':''}`} > */}
    <div className="d-flex bd-highlight">
      <div className="img_cont">
        <a> <img src={`${(item.senderImage || item.groupImage)}`} className="rounded-circle user_img" />
        </a> <span className={`${item.isOnline == '1' ? 'online_icon' : 'online_icon offline'}`} />
      </div>
      <div className="user_info">
        <a><span>{item.senderName || item.groupName}</span>
         {!item.groupId && <p>{item.isOnline ? 'Online': 'Offline'}</p>}</a>
      </div>

    </div>
    {isAdmin &&  <h1 className="admin_status" >Admin</h1>       }
  </li>
  )
}

export default ChatListingItem