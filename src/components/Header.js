import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <button className="header__received">RECEIVED</button>
            <button className="header__sent">SENT</button>
        </div>
    )
}

export default Header
