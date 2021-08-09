import React, { useState } from 'react'



/** component to change font size of tickts */
const FontResizer = (props) =>
{
    const disabled = true
    const abled = false

    const [smallState, setSmallState] = useState(abled)
    const [normalState, setnormalState] = useState(disabled)
    const [largeState, setLarngeState] = useState(abled)

    /** resizes the font of all tickets */
    const resizeFont = (size) => {
        props.setFontSize(size)
        size === 'small' && setStates(disabled, abled, abled) 
        size === 'normal' && setStates(abled, disabled, abled)
        size === 'large' && setStates(abled, abled, disabled)
    } 

    /** set font size states */
    const setStates = (small, normal, large) => {
        setSmallState(small)
        setnormalState(normal)
        setLarngeState(large)
    }

    return (

        <div>
        <button className={'small-font-button'} disabled={smallState} onClick={()=>{resizeFont('small')}}>small</button>
        <button  className={'normal-font-button'} disabled={normalState} onClick={()=>{resizeFont('normal')}}>normal</button>
        <button  className={'large-font-button'} disabled={largeState} onClick={()=>{resizeFont('large')}}>large</button>
        </div>
    )
    
}


export default FontResizer