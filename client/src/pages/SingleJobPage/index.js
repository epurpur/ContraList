import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import SingleJobCard from '../../components/SingleJobCard';

// styles
import './styles.css';

import { ADD_COMMENT } from '../../utils/mutations';

const SingleJob = ( {userType} ) => {
    
    const [ commentInfo, setCommentInfo ] = useState({jobId: '', commentAuthor: ''})
    const [ apply, {error, data} ] = useMutation(ADD_COMMENT);

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
                    <button>Apply for Job</button>
                </section>
                
            </>}
        </div>
    )
}

export default SingleJob;
