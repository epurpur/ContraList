import React from 'react'
import { Link } from 'react-router-dom';

//styles are in /LndingPage/styles.css


const JobCard = ({userRole,allJobsData}) => {
    console.log('this is from jobCard component',allJobsData);
    return (
        <div id="jobContainer">
            <div className="jobCardsHolder">
                <h1>My Active Jobs</h1>
               {/* Link to= WILL LINK TO SINGLE JOB PAGE (ex: /SingleJobPage/:id */}
                <Link to='/SingleJobPage' className='jobCard' style={{ textDecoration: 'none' }}>
                    <p>Job 1</p>
                    <p> Description </p>
                    <div className='jobCardBottom'>
                        <p>Created by: 'contractor name'</p>
                        <p>Date: 7/22/2021</p>
                    </div>
                </Link>
            </div>
            <div className="jobCardsHolder">
                <h1>All Active Jobs</h1>
                {/* Link to= WILL LINK TO SINGLE JOB PAGE (ex: /SingleJobPage/:id */}
                <Link to='/SingleJobPage' className='jobCard' style={{ textDecoration: 'none' }}>
                    <p>Job 1</p>
                    <p> Description </p>
                    <div className='jobCardBottom'>
                        <p>Created by: 'contractor name'</p>
                        <p>Date: 7/22/2021</p>
                    </div>
                </Link>
                <Link to='/SingleJobPage' className='jobCard' style={{ textDecoration: 'none' }}>
                    <p>Job 2</p>
                    <p> Short Description </p>
                    <div className='jobCardBottom'>
                        <p>Created by: 'contractor name'</p>
                        <p>Date: 7/23/2021</p>
                    </div>
                </Link>            
                <Link to='/SingleJobPage' className='jobCard' style={{ textDecoration: 'none' }}>
                    <p>Job 3</p>
                    <p> Short Description </p>
                    <div className='jobCardBottom'>
                        <p>Created by: 'contractor name'</p>
                        <p>Date: 7/24/2021</p>
                    </div>
                </Link>        
            </div>
        </div>
    )
}

export default JobCard;
