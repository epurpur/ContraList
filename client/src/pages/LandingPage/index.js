import React from 'react'
import { Link } from 'react-router-dom';

import './styles.css';

import ContractorJobCard from '../../components/ContractorJobCard';

const LandingPage = ( {userType, setUserType} ) => {

    // SETTING USER TYPE ARTIFICIALLY THIS WILL BE CHANGED LATER
    setUserType('contractor');

    return (
        <div>
            {/* Evaluate userType if it is set to contractor or worker */}
            {userType === 'contractor' ? 
            
            <section id='contractorJobs'>
                <h1 id='contractorTitle'>Your Active Jobs</h1>
                    {/* Eventually this will make DB call and get active jobs related to specific contractor */}
                    {/* Will then map over each job and render card here */}
                    <ContractorJobCard />
                <Link id='newJobButton' className='links' to='/NewJob' style={{ textDecoration: 'none' }}> Create New Job </Link>
            </section>
             
            
            
            : 'Worker Landing' }
        </div>
    )
}

export default LandingPage;
