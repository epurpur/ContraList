import React, {useState, useContext} from 'react';
import {useLocation} from "react-router-dom";
import { useMutation } from '@apollo/client';
import { UserContext } from '../../utils/UserContext';
import { ADD_COMMENT } from '../../utils/mutations';

const SingleJobCard = () => {

    // use context
    const { userRole, setUserRole } = useContext(UserContext);

    // data passed in as state from ActiveJobsCard
    let data = useLocation();
    console.log('DATA AVAILABLE', data.state)

    //gets ID of current user
    const userId = localStorage.getItem('userId');

    // commentInfo set to ID of current job and id of currently logged in user
    const [ commentInfo, setCommentInfo ] = useState({jobId: data.state.id, commentAuthor: userId})
    // executes ADD_COMMENT mutation
    const [ apply, {error, data:CommentData} ] = useMutation(ADD_COMMENT);

    const makeComment = async (event) => {
        event.preventDefault();
    }





    // set state to determine if user has already applied for a job or not. This will be used to render 'apply for job' button for worker
    const [ alreadyApplied, setAlreadyApplied ] = useState('no');

    // logic to determine if user has already applied for job
    

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
                {/* Render 'apply for job' button conditionally if user is a worker */}
                {userRole === '2' && <button id='applyBtn'>Apply for Job</button>}
            </div>
        </>
    )
}

export default SingleJobCard;
