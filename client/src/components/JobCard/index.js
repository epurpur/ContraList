import React from 'react'

const JobCard = () => {
    return (
        <div id="jobCardsHolder">
            <div className='jobCard'>
                <p>Job 1</p>
                <p> Description </p>
                <div className='jobCardBottom'>
                    <p>Created by: 'contractor name'</p>
                    <p>Date: 7/22/2021</p>
                </div>
            </div>
            <div className='jobCard'>
                <p>Job 2</p>
                <p> Short Description </p>
                <div className='jobCardBottom'>
                    <p>Created by: 'contractor name'</p>
                    <p>Date: 7/23/2021</p>
                </div>
            </div>            
            <div className='jobCard'>
                <p>Job 3</p>
                <p> Short Description </p>
                <div className='jobCardBottom'>
                    <p>Created by: 'contractor name'</p>
                    <p>Date: 7/24/2021</p>
                </div>
            </div>        
        </div>
    )
}

export default JobCard;
