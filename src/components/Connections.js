import { Avatar } from '@material-ui/core'
import { DonutLarge } from '@material-ui/icons'
import React from 'react'
import './connections.css'

const Connections = (props) => {
    return (
        <div className="connections">
            <div className="connections__right">
                <Avatar src={props.avatar}/>
                <div className="connections__right__info">
                    <p className="name">{props.name}</p>
                    <p className="job">{props.job}</p>
                    <p className="number">{props.connections} CONNECTIONS</p>
                </div>
            </div>
            <div className="connections__left">
                <button className="connected">CONNECT</button>
                <button className="decline">DECLINE</button>
            </div>
        </div>
    )
}

export default Connections
