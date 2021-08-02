import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import './styles.css';

import SingleJobCard from '../../components/SingleJobCard';

const SingleJob = ( {userType} ) => {
    
    const submitAlert = () => {
        alert('Your application has been submitted!');
    }
    
    return (
        <div>
            {userType === 'contractor' ? 
            //If userType === 'contractor, show contractor view of single job
            <>
                <section id="singleJob">
                    <SingleJobCard />
                    <div id='applicants'>
                        Show applicant cards here
                    </div>
                </section>
                <br></br>
                <div id='linkHolder'>
                    <Link class='links' style={{ textDecoration: 'none' }}>Edit Job</Link>
                    <Link class='links' style={{ textDecoration: 'none' }}>Delete Job</Link>
                </div>
            </>
            : 
            // else if userType === 'worker', show worker view of single job
            <>
                <section id="singleJob">
                    <SingleJobCard />
                    <button onClick={submitAlert}>Submit Your Application</button>
                </section>
                
            </>}
        </div>
    )
}

export default SingleJob;
