import React from 'react'
import '../App.scss'

/** buttons for going to the next/previous page, and display the number of the current page */
const PageManager = (props) => {

    /** disable the button for previus page */
    const disablePrev = () => {
        return (props.page === 1  ? 'disabled' : 'abled')
    }

    /** disable the button for next page */
    const disableNext = () => {
        return (props.length < 20 ? 'disabled' : 'abled')
    }

        return (
            <div>
            <button className={'page-button ' + disableNext()} onClick={()=>{props.goToNextPage()}}>nextPage&#187;</button>
            <h5 className='page-number'>{props.page}</h5>
            <button className={'page-button ' + disablePrev()} onClick={()=>{props.goToPrevPage()}}>&#171;prevPage</button> 
            <div>
            {props.length === 0 ? <h5 className='nothing-to-see'>Nothing to see here...</h5> : null}
            </div>
            </div>
        )

}

export default PageManager