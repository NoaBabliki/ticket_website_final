import React from 'react';
import './App.scss';
import {createApiClient, Ticket} from './api';
import ShowTickets from './components/ShowTickets'


export type AppState = {
	tickets?: Ticket[],
	search: string[],
	page:number
}

const api = createApiClient();


export class App extends React.PureComponent<{}, AppState> {

	state: AppState = {
		search: [],
		page:1,
	}

	searchDebounce: any = null;
	ticketsDebounce: any = null

	async componentDidMount() {
		this.setState({
			tickets: await api.getTickets(this.state.search.join(','), this.state.page)
		});
	}


	/** show tickets matching user input */
	renderTickets = (tickets: Ticket[]) => {
		this.ticketUpdate()
		
		return (
			<ul className='tickets'>
				<ShowTickets 
				tickets={tickets} 
				page={this.state.page} 
				setPage={this.setPage}
				search={this.state.search}>
				</ShowTickets>
			</ul>
		)
	}

	/** get tickets */
	ticketUpdate = async () => {

		clearTimeout(this.ticketsDebounce);

		this.ticketsDebounce = setTimeout(async () => {
			this.setState({
				tickets: await api.getTickets(this.state.search.join(','), this.state.page)
			});
		}, 100);
	}


 
	/** search for a ticket matching keywords from the user */
	onSearch = async (val: string, newPage?: number) => {
		
		clearTimeout(this.searchDebounce);

		const regex = new RegExp(/(".*?"|[^"*\s]+)(?=\s*|\s*$)/)

		const searchSplitted = val.toLowerCase().split(regex).filter(v => (v.trim() !== '')) || [];
		
		this.searchDebounce = setTimeout(async () => {
			this.setState({
				search: searchSplitted,
				page: 1
			});
		}, 300);
	}


	/** set to next / previus page */
	setPage = async (direction:number, length:number) => {
		
		const next = 1
		const prev = -1
		const maxTickets = 20

		if ((this.state.page === next && direction === prev) || (length < maxTickets && direction === next))
		{
			return null
		}
		
		this.setState({
		page: this.state.page + direction,
		})	
	}

	

	render() {	
		const {tickets} = this.state;

		return (<main>
			
			<h1>Tickets List</h1>
			<header>
				<input type="search" placeholder="Search..." onChange={(e) => this.onSearch(e.target.value)}/>
			</header>
			{tickets ? <div className='results'>Showing {tickets.length} results</div> : null }	
			{tickets ? this.renderTickets(tickets) : <h2>Loading..</h2>}
			
			
		</main>)
	}
}

export default App;