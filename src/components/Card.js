import { Avatar } from '@material-ui/core'
import { CropSquareSharp } from '@material-ui/icons'
import React, { useState } from 'react'
import './card.css'

const Card = (props) => {
    const [req, setReq] = useState('CONNECT')
    const onClick = () => {
        req === 'CONNECT'
        ? setReq('Request Sent')
        : setReq('CONNECT')
    }
    const deleteDiv = (e) => {
        const card = document.querySelector(`.${e}`)
        card.style.display = "none"
    }
    return (
        <div className={`card ${props.name}`}>
            <div className="mainCard">
                <div className="card__icon">
                <Avatar src={props.avatar}/>
                <div className="x" onClick={() => {
                    deleteDiv(props.name)
                }}>X</div>
                </div>
                <div className="card__name">{props.name}</div>
                <div className="card__job">{props.job}</div>
                <div className="card__number">{props.connections} Connections</div>
                <button onClick={onClick} className="card__connect">{req}</button>
            </div>
        </div>
    )
}

export default Card
