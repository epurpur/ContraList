import React, {useState, useEffect, useContext} from 'react';
import {Link, useLocation} from "react-router-dom";
import { useMutation } from '@apollo/client';
import { UserContext } from '../../utils/UserContext';
import { ADD_COMMENT } from '../../utils/mutations';

const SingleJobCard = () => {

    // use context
    const { userRole, setUserRole } = useContext(UserContext);

    // data passed in as state from ActiveJobsCard
    let data = useLocation();
    console.log('DATA AVAILABLE IN SINGLE CARD', data.state)

    //gets ID of current user
    const userId = localStorage.getItem('userId');

    // commentInfo set to ID of current job and id of currently logged in user
    // keeping commentText as empty string. In the future could use this for more
    const [ commentInfo, setCommentInfo ] = useState({jobId: data.state.id, commentText: '', commentAuthor: userId})
    // executes ADD_COMMENT mutation
    const [ applyComment, {error, data:CommentData} ] = useMutation(ADD_COMMENT);

    const makeComment = async (event) => {
        
        try {
            // takes commentInfo data and executes addCommment mutation
            const { CommentData } = await applyComment({
                variables: {...commentInfo}
            }); 
        } catch (e) {
            console.error(e);
        }

        alert('Your application has been submitted!');
    }

    // make state of alreadyApplied to evaluate whether user has applied for this job yet or not
    // use useEffect hook on render to check wither if user has applied. Default state is 'no' but sets to 'yes' if conditions are true
    const [ alreadyApplied, setAlreadyApplied ] = useState('no');

    useEffect(() => {
        if (data.state.comments && data.state.comments.length > 0 && data.state.comments[0].commentAuthor == userId) {
            setAlreadyApplied('yes')
        }
    });


    // if there are applicants and the user logged in is a contractor, render list of cards for each individual user
    // A way to do this would be to get the user IDs from the comments.  Get all user IDs. For those that match, return the info about users that match
    
    //1. get list of user IDs from comments





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
                {userRole === '2' && alreadyApplied === 'no' && <Link to='/LandingPage' onClick={makeComment}><button id='applyBtn'>Apply for Job</button></Link>}
                {alreadyApplied === 'yes' && <h1> You have already applied for this job! </h1>}
            </div>
            {/* if user is a contractor, render the applicants in a list underneath the card */}
            {userRole === '1' && 
            <>
                <h1>Applicants</h1>
                <p>No one has applied yet!</p>
            </>
            }
        </>
    )
}

export default SingleJobCard;
