
import Link from "next/link"

const DashboardSidebar = () => {
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Admin</div>
                </a>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <Link className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>
                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Interface
                </div>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                        <i className="fas fa-fw fa-users"></i>
                        <span>Users</span>
                    </a>
                    <div id="collapseOne" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" href='/admin/user'>User List</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-file-contract"></i>
                        <span>CMS</span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" href='/admin/user'>Terms & Condition</Link>
                            <Link className="collapse-item" href='/admin/user'>Privacy Policy</Link>
                            <Link className="collapse-item" href='/admin/user'>About</Link>
                        </div>
                    </div>
                </li>


            </ul>
        </>
    )
}

export default DashboardSidebar