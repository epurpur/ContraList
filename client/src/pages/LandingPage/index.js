import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_JOBS } from '../../utils/queries';
import './styles.css';

import ActiveJobsCard from '../../components/ActiveJobsCard';
import { UserContext } from '../../utils/UserContext';


const LandingPage = ()  => {

    const { userRole, setUserRole } = useContext(UserContext);

    //TEST DB CALLS USING GRAPHQL AND APOLLO SERVER using USEQUERY HOOK
    const { loading, data:allJobsData } = useQuery(QUERY_JOBS);

    const makeActiveJobCards =  () => {
        // this gets all jobs data from 'allJobsData' prop. Makes HTML for each item in allJobsData

        return  allJobsData.jobs.map((job) =>
        (
            <ActiveJobsCard 
                createdAt={job.createdAt}
                jobText={job.jobText}
                key={job.jobAuthor}
            /> 
        ))
    };
    
    


    return (
        <div>
            {/* Evaluate userRole if it is set to contractor or worker */}
            {userRole === '1' ? 
            
            <section id='contractorJobs'>
                <h1 id='contractorTitle'>Your Active Jobs (contractor)</h1>
                <p id='headerSubtitle'>(click job card to view more information)</p>
                    {/* Eventually this will make DB call and get active jobs related to specific contractor */}
                    {/* Will then map over each job and render card here */}
                    <ActiveJobsCard userRole={userRole} />
                <Link id='newJobButton' className='links' to='/NewJob' style={{ textDecoration: 'none' }}> Create New Job </Link>
            </section>
            
            // else if userRole != 'contractor', userRole will be 'worker'
            : 
            <section id='contractorJobs'>
                <h1 id='contractorTitle'>View Jobs (worker)</h1>
                <p id='headerSubtitle'>(click job card to view more information)</p>
                    <div className='jobContainer'>
                        <div className="jobCardsHolder">
                            <h1>My Active Jobs</h1>
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
                            {/* useQuery is asynchronous, so when allJobsData is available, then execute makeActiveJobCards */}
                            {allJobsData && makeActiveJobCards()}    
                        </div>
                    </div>
            </section>
            }
        </div>
    )
}

export default LandingPage;




{/* <div className="jobCardsHolder">
    <h1>My Active Jobs</h1>
    <Link to='/SingleJobPage' className='jobCard' style={{ textDecoration: 'none' }}>
        <p>Job 1</p>
        <p> Description </p>
        <div className='jobCardBottom'>
            <p>Created by: 'contractor name'</p>
            <p>Date: 7/22/2021</p>
        </div>
    </Link>
</div> */}