
import MUIDataTable from "mui-datatables";
import React, { useEffect } from 'react'
import { userList } from '../../../redux/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Link from "next/link";


const UserList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userList())
    }, [])

    const { user } = useSelector((state) => state);


    console.log(user, '================???')
    let users = user.users
    let finalArray = []
    for (let i in users) {
        let dataArray = []

        let btn = <div className="row">
            <Link href={`/admin/edit_user/${users[i].id}`}>
                <Tooltip title="view">
                    <IconButton color="primary" aria-label="delete">
                        <BorderColorIcon />
                    </IconButton>
                </Tooltip>
            </Link>

            <Link href={`/admin/edit_user/${users[i].id}`}>
                <Tooltip title="Edit">
                <IconButton title="Delete" color="error" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
            </Link>
        </div>



        dataArray.push(users[i].full_name)
        dataArray.push(users[i].family_name)
        dataArray.push(users[i].email)
        dataArray.push(users[i].phone)
        dataArray.push(users[i].date_birth)
        dataArray.push(users[i].createdAt)
        dataArray.push(btn)
        finalArray.push(dataArray)
    }

    const columns = ["Name", "Family Name", "Email", "Phone", "Date Of Birth", "createdAt", "Action"];

    const data = finalArray

    const options = {
        filterType: "dropdown",
        responsive: "scroll"
    };

    return (
        <>


            <MUIDataTable
                title={"User list"}
                columns={columns}
                data={data}
                options={options}
            />

        </>
    )
}
export default UserList