import { AccountCircle, Home, Notifications, People, Search } from '@material-ui/icons'
import React from 'react'
import './nav.css'

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__brand">
                Vistaar<span>X</span>
            </div>
            <div className="nav__icons">
                <Home/>
                <People/>
                <Notifications/>
                <AccountCircle/>

            </div>
            <div className="nav__search">
                <Search/>
                <input type="text" placeholder="Search" />
            </div>
        </div>
    )
}

export default Nav
