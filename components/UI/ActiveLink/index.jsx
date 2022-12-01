import Link from 'next/link';
import React from 'react'

const ActiveLink = ({name,router,href, children,}) => {

    const handleClick = (event)=>{
          event.preventDefault();
          router.push(href)
    }


  const isCurrentPath = router.pathname == '/' ? router.pathname == href : href.includes(router.pathname)


  return (
    <li onClick={handleClick}  className={isCurrentPath ? "nav-item active":"nav-item" } >
          <Link className="nav-link"  href={href}>{children}</Link>
    </li>
  )
}

export default ActiveLink