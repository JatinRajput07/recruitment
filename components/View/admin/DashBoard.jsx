import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { useEffect } from 'react'
import { userList } from '../../../redux/actions/userActions'


const Dashboard = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(userList())
    }, [])
    const { user, auth } = useSelector((state) => state)


    return (
        <>
            <div className="container-fluid mt-4">

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <Link href="/admin/user">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Users</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{user && user?.users?.length}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>


                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-danger shadow h-100 py-2">
                            <Link href="/admin/user">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                CMS</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{'6'}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


export default Dashboard