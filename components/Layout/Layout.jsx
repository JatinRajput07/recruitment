import Navbar from './Dashboard-Navbar'
import Sidebar from './Dashboard-Sidebar'


export default function Layout({ requireAuth, children }) {

  return (
    <>
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />
          {children}
        </div>

      </div>
    </>
  )
}