import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IMGURL } from "../../../../helpers/apiHelper";
import { uploadImage } from "../../../../helpers/utils";
import { clearAlerts, setFailed, setSuccess } from "../../../../redux/actions/alertsActions";
import {
  createGroup,
  getChatListing,
  joinRoom,
  setChatListing,
  setGroupDetail,
  setisAddGroup,
} from "../../../../redux/actions/chatActions";
import ChatListingItem from "../ChatListingItem";

const ChatListing = () => {

  const dispatch = useDispatch();
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [listing, setlisting] = useState([]);
  const [keyword, setkeyword] = useState("");
  const [data, setdata] = useState({
    name : '',
    groupMembers: [],
    user_id: auth?.user?.id,
    image: 'group_placeholder.png',
    groupId: null
  });
  const [loading, setloading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false)
  
  const { socket, chat, auth } = useSelector((state) => state);
  
  const handleCheckUncheckUser = (e,id) => {

    const newMembers = [...data.groupMembers] 

     if(e.target.checked){
       newMembers.push(id)
       setdata((prev)=>({
          ...prev,
          groupMembers: newMembers
       }))
     }else{

      newMembers.pop(id)
      setdata((prev)=>({
         ...prev,
         groupMembers: newMembers
      }))       

     }


  }

  const handleChange = async(e) => {

    if(e.target.name == "image"){

      let res =  await uploadImage(e.target.files[0])
      console.log(res)
       setdata((prev)=>{
         return {
           ...prev,
           [e.target.name]: res.body[0].name,
         }
       })

    }else{
      setdata((prev)=>{
        return {
          ...prev,
          [e.target.name]: e.target.value,
        }
      })


    }


  }

  const handleSubmit = (e) => {

     e.preventDefault();
     setloading(true);
    //  if(chat?.groupDetail){

       dispatch(createGroup(data))
    //  }

  }

  const handleUploadImage = async(e)=>{

    console.log(e.target.files[0])

    
    
   
  

  }


  useEffect(() => {
    
    dispatch(getChatListing());

    socket.socket.on("chat_message", (data) => {
      dispatch(setChatListing(data));
    });

    socket.socket.on("new_message", (data) => {
      dispatch(getChatListing());
    });

    socket.socket.on('create_groupp',(data) => {

      setloading(false);
      console.log(data,"<<<<<<<<<<")

      if(data.success == 1){

         dispatch(setSuccess(data.message));
         setTimeout(() => {
            dispatch(clearAlerts())
         }, 500);
         dispatch(getChatListing());
         dispatch(setisAddGroup(false))

      }

      if(data.success == 0){

        dispatch(setFailed(data.messsage));
        setTimeout(() => {
           dispatch(clearAlerts())
        }, 500);

      }
     
       
    });

    socket.socket.on('new_group', (data) => { 
      console.log('<<<<<<<<<<<<NEW GROUP HAS BEEN CREATED',data)  
        dispatch(getChatListing());
        console.log(data,"<<<<<<<<<<<<<<");
        // return
        dispatch(joinRoom({roomId: data.id}));
    })
   


  }, []);

  useEffect(() => {
    setlisting(chat.chatListing);
  }, [chat.chatListing]);

  const filterListing = (value) => {
    setkeyword(value);
    setlisting(
      chat.chatListing.filter(
        (item) =>
          item?.groupName?.includes(value) || item?.senderName?.includes(value)
      )
    );
  };

  // view group
  useEffect(()=>{

    
    if(chat.groupDetail){
          setdata((prev)=> ({
          ...data,
          name: chat?.groupDetail?.name,
          image: chat?.groupDetail?.image,
          groupMembers: chat?.groupDetail?.userGroupMembers?.map((mem)=> mem.user_id)?.filter((item => item != auth.user.id)),
          groupId: chat?.groupDetail?.id,
          adminId: chat?.groupDetail?.userGroupMembers?.find((mem => mem.is_admin == 1)).user_id
          }));

          setlisting([])
    }else{
      setdata((prev)=> ({
          name : '',
          groupMembers: [],
          user_id: auth?.user?.id,
          image: 'group_placeholder.png',
          groupId: null,
          adminId: null
        }))
   

    }


  },[chat.groupDetail])

  useEffect(() => {

    // console.log(chat?.groupDetail?.userGroupMembers?.find(mem => mem.user_id == auth.user.id)?.is_admin,"isadmin<<<<<<<<<<<<<<<<")
    const result = chat?.groupDetail?.userGroupMembers?.find(mem => mem.user_id == auth.user.id)?.is_admin;
    // alert(result)
    // alert(Boolean(chat?.groupDetail?.userGroupMembers?.find((mem)=> mem?.user_id == auth?.user?.id)?.is_admin))
    setIsAdmin(result)
    
  },[chat.groupDetail])

  return (
    <>
      <section className="page_heading inbx">
        <h1>Inbox</h1>
      </section>
      <section className="message">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mesge">
                <div className="row justify-content-center h-100">
                  <div
                    className="col-md-8 col-xl-6 chat"
                    style={{ paddingRight: 0 }}
                  >
                    <div className="card mb-sm-3 mb-md-0 contacts_card">
                      <div className="card-header sd group_add">
                        <div className="input-group">
                          <input
                            name="keyword"
                            value={keyword}
                            onChange={(e) => filterListing(e.target.value)}
                            type="text"
                            placeholder="Search..."
                            className="form-control search"
                          />
                          <div className="input-group-prepend">
                            <span className="input-group-text search_btn">
                              <i className="fas fa-search" />
                            </span>
                          </div>
                        </div>

                        {/* {!chat.isAddGroup && (
                          <span
                            id="action_menu_btn"
                            onClick={() => setisMenuOpen(!isMenuOpen)}
                          >
                            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                          </span>
                        )}
                        {isMenuOpen && (
                          <div className="action_menu">
                            <ul>
                              <li
                                onClick={() => {
                                  setisMenuOpen(!isMenuOpen);
                                  dispatch(setisAddGroup(!chat.isAddGroup));
                                  dispatch(setGroupDetail(null))
                                }}
                              >
                                <i className="fas fa-user-circle" />
                                Create Group
                              </li>
                            </ul>
                          </div>
                        )} */}
                      </div>
                      <form className="card-body contacts_body" onSubmit={handleSubmit}>
                   
                        {chat.isAddGroup && (
                          <div className="add_members">
                            <i
                              className="fas fa-angle-left"
                              aria-hidden="true"
                              onClick={() => dispatch(setisAddGroup(!chat.isAddGroup))}
                            ></i>
                            <div className="group_img">
                              <img src={ data.image}/>
                              <input name="image" onChange={handleChange} type="file" disabled={!isAdmin && chat?.isAddGroup && chat?.groupDetail}/>
                              <i class="fas fa-camera" aria-hidden="true"></i>
                            </div>
                            <div className="member_name">
                              <input
                                name="name"
                                type="text"
                                placeholder="Enter Group name"
                                className=""
                                value={data?.name}
                                onChange={handleChange}
                                required
                                disabled={!isAdmin && chat?.isAddGroup && chat?.groupDetail}
                              />
                            </div>
                          </div>
                        )}
                        
                        {!chat.isAddGroup && (
                          <ul className="contacts">
                            {listing.map((item) => {
                              return <ChatListingItem item={item} />;
                            })}
                          </ul>
                        )}

                    {/* CREATE NEW GROUP */}

                        {chat.isAddGroup && !chat.groupDetail && (
                          <>
                          <ul className="contacts add_scroll">
                            {listing
                              .filter((item) => item.groupId == null)
                              .map((item,i) => {
                                return (
                                  <>
                                    <ChatListingItem
                                      isAddGroup={chat.isAddGroup}
                                      item={item}
                                    />
                                    <div className="check_list">
                                      <div class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          class="custom-control-input"
                                          id={"customCheck"+i}
                                          onChange={
                                            (e) => handleCheckUncheckUser(e, item.otheruserid)
                                          }
                                        />
                                        <label
                                          class="custom-control-label"
                                          for={"customCheck"+i}
                                        ></label>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                          </ul>
                           <div className="creat_group">
                           <button disabled={loading} className=""> Create Group</button>
                           </div>
                         </>
                        )}

                        {chat?.isAddGroup && chat?.groupDetail && isAdmin  &&  (
                          <>
                          <ul className="contacts add_scroll">
                            {listing
                              .filter((item) => item.groupId == null)
                              .map((item,i) => {
                                return (
                                  <>
                                
                                  {console.log('item>>>>>>>>>>>>>>>>>>>', item)}
                                    <ChatListingItem
                                      isAddGroup={chat.isAddGroup}
                                      item={item}
                                    />
                                    {/* { data?.adminId == item.otheruserid && <h1 className="admin_status" style={{color: 'white'}}>admin</h1>} */}
                                   { isAdmin && <div className="check_list">
                                     
                                      <div class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          class="custom-control-input"
                                          id={"customCheck"+i}
                                          onChange={
                                            (e) => handleCheckUncheckUser(e, item.otheruserid)
                                          }
                                          defaultChecked={chat?.groupDetail?.userGroupMembers?.find((mem => mem.user_id == item.otheruserid))}//come back here
                                        />
                                        <label
                                          class="custom-control-label"
                                          for={"customCheck"+i}
                                        ></label>
                                      </div>
                                      
                                    </div>}
                                  {/* </Link> */}
                                  
                                  </>
                                );
                              })}
                          </ul>
                         {isAdmin && <div className="creat_group">
                           <button disabled={loading} className=""> Update Group</button>
                           </div>}
                         </>
                        )}

                        {chat?.isAddGroup && chat?.groupDetail && !isAdmin  &&  (
                          <>
                          <ul className="contacts add_scroll">
                            {chat?.groupDetail?.userGroupMembers
                              .map((item,i) => {
                                return (
                                  <>
                                  {/* <Link href={`profile/${item.user_id}`}> */}
                                 
                                    <ChatListingItem
                                      isAddGroup={chat.isAddGroup}
                                      item={item}
                                      isAdmin={data.adminId == item.user_id}
                                    />
                                                      
                              
                                  
                                  </>
                                );
                              })}
                          </ul>
                         </>
                        )}
                      </form>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatListing;
