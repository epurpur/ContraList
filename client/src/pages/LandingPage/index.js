import React from 'react'

import './styles.css';

import ContractorJobCard from '../../components/ContractorJobCard';

const index = ( {userType, setUserType} ) => {

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
                <button id='newJobButton'> Create New Job </button>
            </section>
             
            
            
            : 'Worker Landing' }
        </div>
    )
}

export default index
