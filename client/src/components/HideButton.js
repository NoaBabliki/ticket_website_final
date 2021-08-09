import React from 'react'
import '../App.scss'

/** hide button for a ticket */
const HideButton = (props) => {

    return (
        <button className='hide-button' onClick={() => {props.hideTicket()}}>Hide</button>
    )
}

export default HideButton