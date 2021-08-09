import React from 'react'

import '../App.scss'

/** display the content of a ticket */
const DisplayContent = (props) => {

    const {content} = props
  
    return (
        <div>
        <p className={'content ' + props.fontSize } 
   
        dangerouslySetInnerHTML={{__html: content}}></p> 
        
        </div>
    )
}

export default DisplayContent