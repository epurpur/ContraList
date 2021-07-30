import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import './styles.css';

import JobCard from '../../components/JobCard';


const LandingPage = ( {userType, setUserType} ) => {

    // SETTING USER TYPE ARTIFICIALLY THIS WILL BE CHANGED LATER
    setUserType('contractor');






    //TEST DB CALLS USING GRAPHQL AND APOLLO SERVER using USEQUERY HOOK
    // const { loading, data } = useQuery(QUERY_JOBS);
    // console.log(data);



    return (
        <div>
            {/* Evaluate userType if it is set to contractor or worker */}
            {userType === 'contractor' ? 
            
            <section id='contractorJobs'>
                <h1 id='contractorTitle'>Your Active Jobs (contractor)</h1>
                <p id='headerSubtitle'>(click job card to view more information)</p>
                    {/* Eventually this will make DB call and get active jobs related to specific contractor */}
                    {/* Will then map over each job and render card here */}
                    <JobCard userType={userType} />
                <Link id='newJobButton' className='links' to='/NewJob' style={{ textDecoration: 'none' }}> Create New Job </Link>
            </section>
            
            // else if userType != 'contractor', userType will be 'worker'
            : 
            <section id='contractorJobs'>
                <h1 id='contractorTitle'>All Active Jobs (worker)</h1>
                <p id='headerSubtitle'>(click job card to view more information)</p>
                    {/* Eventually this will make DB call and get active jobs related to specific contractor */}
                    {/* Will then map over each job and render card here */}
                    <JobCard userType={userType} />
            </section>
        }
        </div>
    )
}

export default LandingPage;
