import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_JOBS } from '../../utils/queries';
import './styles.css';

import JobCard from '../../components/JobCard';
import { UserContext } from '../../utils/UserContext';


const LandingPage = ()  => {

    const { userRole, setUserRole } = useContext(UserContext);

    //TEST DB CALLS USING GRAPHQL AND APOLLO SERVER using USEQUERY HOOK
    const { loading, allJobsData } = useQuery(QUERY_JOBS);
    



    return (
        <div>
            {/* Evaluate userRole if it is set to contractor or worker */}
            {userRole === '1' ? 
            
            <section id='contractorJobs'>
                <h1 id='contractorTitle'>Your Active Jobs (contractor)</h1>
                <p id='headerSubtitle'>(click job card to view more information)</p>
                    {/* Eventually this will make DB call and get active jobs related to specific contractor */}
                    {/* Will then map over each job and render card here */}
                    <JobCard userRole={userRole} />
                <Link id='newJobButton' className='links' to='/NewJob' style={{ textDecoration: 'none' }}> Create New Job </Link>
            </section>
            
            // else if userRole != 'contractor', userRole will be 'worker'
            : 
            <section id='contractorJobs'>
                <h1 id='contractorTitle'>All Active Jobs (worker)</h1>
                <p id='headerSubtitle'>(click job card to view more information)</p>
                    {/* Eventually this will make DB call and get active jobs related to specific contractor */}
                    {/* Will then map over each job and render card here */}
                    <JobCard userRole={userRole} allJobsData={allJobsData} />
            </section>
        }
        </div>
    )
}

export default LandingPage;
