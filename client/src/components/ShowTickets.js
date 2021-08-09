import React from 'react'
import '../App.scss'
import FontResizer from './FontResizer'
import PageManager from './PageManager'
import RestoreButton from './RestoreButton'
import TicketDisplay from './TicketDisplay'


/** show all tickets */
class ShowTickets extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            hiddenTickets: [],
            tempTicket: '',
            showHideButton: '',
            fontSize: 'normal',
        }
    }

    /** hide a single ticket */
    hideTicket(ticket){
        this.state.hiddenTickets.push(ticket.id)
        this.setState({tempTicket: ticket.id})
    }

    /** restore all hidden tickets */
    restoreAll(){
        this.setState({hiddenTickets: []})
        this.setState({tempTicket: null})
    }

    /** restore all hidden tickets in current page */
    restorePage(){

        for(let i = 0; i < this.props.tickets.length; i++) {

            let id = this.props.tickets[i].id

            if (this.state.hiddenTickets.includes(id))
            {
                let index = this.state.hiddenTickets.indexOf(id)
                this.state.hiddenTickets.splice(index, 1)
            }
        }
    }

    /** change font size for all tickets */
    changeFontSize = (newSize) =>{
       this.state.fontSize !== newSize && this.setState({fontSize: newSize})
    }

    /** how many hidden tickets in curren page */
    getHiddenTicketsNumber = () => {
        const curPageHiddenArray = this.props.tickets.filter((t) => 
        (this.state.hiddenTickets.includes(t.id)))
        return (curPageHiddenArray.length)
    }


    render(){
        const {tickets} = this.props;
        const filteredTickets = tickets.filter((t) => (!this.state.hiddenTickets.includes(t.id)))
        return (
            <div>
                <FontResizer setFontSize={this.changeFontSize}/>
                <PageManager
                goToNextPage={()=>this.props.setPage(1, tickets.length)}
                goToPrevPage={()=>this.props.setPage(-1, tickets.length)} 
                length={tickets.length} 
                page={this.props.page}>
                </PageManager>

                <RestoreButton
                length={this.getHiddenTicketsNumber()}
                overall={this.state.hiddenTickets.length}
                restorePage={()=>this.restorePage()}
                restoreAll={()=>{this.restoreAll()}}>
                </RestoreButton>

		        {filteredTickets.map((ticket) => (<li key={ticket.id} className='ticket' 
                onMouseOver={()=>this.setState({showHideButton: ticket.id})}
                onMouseLeave={()=>this.setState({showHideButton: ''})}>
                <TicketDisplay 
                ticket={ticket} 
                showHideButton={this.state.showHideButton} 
                fontSize={this.state.fontSize} 
                hideTicket={()=>this.hideTicket(ticket, this.getHiddenTicketsNumber())}
                search={this.props.search}>
                </TicketDisplay>
		        </li>))}
            </div>   
        )
    }
}
export default ShowTickets
