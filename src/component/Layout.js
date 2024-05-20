import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
       <h1>Layout Page</h1>

       <nav>
        <li>
            <Link to='/contact'>conatct</Link>
        </li>
        <li>
            <Link to='/blog'>blog</Link>
        </li>
       </nav>
       <Outlet/>

    </div>
  )
}

export default Layout