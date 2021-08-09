import React from 'react'
import '../App.scss'
import DisplayContent from './DisplayContent'
import HideButton from './HideButton'


/** display a single ticket */
const TicketDisplay = (props) => {

    const {ticket} = props

    /** mark the search words / strings */
    const markSerachWords = (text, searchWards) => {
        return (text.replace(new RegExp(searchWards.join('|'), "gi"), 
        (match) => `<span style="background-color: #a6ff00b0">${match}</span>`))
    }

    const array = props.search || [];
 
    const fixedArray = array.map(element => element.replace(/[^a-zA-Z0-9\s]+/g, ''))

    const content = markSerachWords(ticket.content, fixedArray)
    const title = markSerachWords(ticket.title, fixedArray)
    
    return (
        <div>
            <h5 className={'title ' + props.fontSize} dangerouslySetInnerHTML={{__html: title}}></h5>

            {props.showHideButton === ticket.id &&
                <HideButton hideTicket={() => props.hideTicket()}/>}
            
            <DisplayContent content={content} fontSize={props.fontSize}/>

            <footer>
                <div className='meta-data'>By {ticket.userEmail} | {new Date(ticket.creationTime).toLocaleString()}</div>
            </footer>
        
        </div>)
}

export default TicketDisplay