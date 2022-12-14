
import { handleLogout } from '../../redux/actions/authAction'
import { useRouter } from "next/router";
import { useDispatch,useSelector } from "react-redux"


const DashboardNavbar = (props) => {
  const router = useRouter();
  const dispatch = useDispatch()
  const { user ,auth } = useSelector((state) => state)

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar static-top shadow">

        {/* <!-- Sidebar Toggle (Topbar) --> */}
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>

        {/* <!-- Topbar Search --> */}


        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
          <div className="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - User Information --> */}
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">{auth?.user?.full_name || 'Admin'}</span>
              <img className="img-profile rounded-circle"
                src="/img/undraw_profile.svg" />
            </a>
            {/* <!-- Dropdown - User Information --> */}
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown">
              <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" onClick={() => dispatch(handleLogout(router))} data-toggle="modal" data-target="#logoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>

        </ul>

      </nav>

    </>
  )

};
export default DashboardNavbar
