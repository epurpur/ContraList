import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_JOBS } from '../../utils/queries';
import './styles.css';

import ActiveJobsCard from '../../components/ActiveJobsCard';
import { UserContext } from '../../utils/UserContext';


const LandingPage = ()  => {

    const { userRole, setUserRole } = useContext(UserContext);

    //DB CALLS USING GRAPHQL AND APOLLO SERVER using USEQUERY HOOK
    const { loading, data:allJobsData } = useQuery(QUERY_JOBS);
    

    const makeActiveJobCards =  () => {
        // this gets all jobs data from 'allJobsData' prop. Makes HTML for each item in allJobsData

        return  allJobsData.jobs.map((job) =>
        (
            <ActiveJobsCard
                id={job._id} 
                createdAt={job.createdAt}
                jobText={job.jobText}
                key={job.jobAuthor}
            /> 
        ))
    };
    
    const makeMyJobCards = () => {
    /**
     * Makes query to DB for all jobs.
     * Then filters out those jobs which the current user has commented (applied) for
     * returns job cards for just those jobs which the user has applied for
     */
        console.log('ALLJOBSDATA', allJobsData.jobs)
        // gets id of currently logged in user
        const userId = localStorage.getItem('userId');

        // holds all jobs user has applied for
        const jobsAppliedFor = [];

        // gets data from query: QUERY_JOBS for all active jobs
        const jobsData = allJobsData.jobs;

        //maps over jobs and then comments for each job for those which the current user has applied for
        //pushes job of those that match to jobsAppliedFor
        jobsData && jobsData.map((job) => 
            job.comments.map((comment) =>
                userId == comment.commentAuthor && jobsAppliedFor.push(job)
            )
        )

        const uniqueJobs = jobsAppliedFor.reduce(function(a, b){
            if (a.indexOf(b) < 0) a.push(b);
            return a;
        }, []);
    
        console.log('UNIQUE',uniqueJobs);

        return uniqueJobs.map((job) => (
                <ActiveJobsCard 
                    id={job._id}
                    createdAt={job.createdAt}
                    jobText={job.jobText}
                    key={job.jobAuthor}
                /> 
        ))

    }


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
                            <h1>Jobs You Have Applied For</h1>
                            {/* useQuery is asynchronous, so when allJobsData is available, then execute makeMyJobCards */}
                            {allJobsData && makeMyJobCards()}
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