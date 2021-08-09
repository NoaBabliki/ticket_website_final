import React from 'react'
import '../App.scss'

/**
 * restore buttons and text: display the "restore overall" option if there are hidden tickets
 * display the "restore this page" option if there are hidden tickets in this page
 */
const RestoreButton = (props) => {

    return (
        props.overall ? 
        <div>
        <p className='restore'>(This page has: {props.length} hidden tickets. overall: {props.overall}</p>

        { props.length  ? <div>
        <button className='restore-button' onClick={() => props.restorePage()}>restore page</button>
        <p className='restore'>|</p> 
        </div> : null}


        <button className='restore-button' onClick={() => props.restoreAll()}>restore all</button>
        <div className='restore'>)</div>
        </div>
         : null
        )
}

export default RestoreButton