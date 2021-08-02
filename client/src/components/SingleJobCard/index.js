import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from '../../utils/mutations';

const SingleJobCard = () => {

    // data passed in as state from ActiveJobsCard
    let data = useLocation();
    console.log('DATA AVAILABLE', data.state)

    //gets ID of current user
    const userId = localStorage.getItem('userId');

    // commentInfo set to ID of current job and id of currently logged in user
    const [ commentInfo, setCommentInfo ] = useState({jobId: data.state.id, commentAuthor: userId})
    // executes ADD_COMMENT mutation
    const [ apply, {error, data:CommentData} ] = useMutation(ADD_COMMENT);

    const submitAlert = () => {
        alert('Your application has been submitted!');
    }

    return (
        <>
            <div id='singleJobCard'>
                <div className='singleJobInfo'>
                    <p>Job Description:</p>
                    <p> {data.state.jobText} </p>
                </div>
                <div className='singleJobInfo'>
                    <p>Location:</p>
                    <p>{data.state.location}</p>
                </div>
                <div className='singleJobInfo'>
                    <p>Duration:</p>
                    <p>{data.state.duration}</p>
                </div>
                <div className='singleJobInfo'>
                    <p>Other Comments:</p>
                    <p>{data.state.otherComments}</p>
                </div>
                <button id='applyBtn'>Apply for Job</button>
            </div>
        </>
    )
}

export default SingleJobCard;
