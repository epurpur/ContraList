import React, {useState, useContext} from 'react';
import {Link, useLocation} from "react-router-dom";
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





    // set state to determine if user has already applied for a job or not. This will be used to render 'apply for job' button for worker
    const [ alreadyApplied, setAlreadyApplied ] = useState('no');

    // logic to determine if user has already applied for job
    const checkAlreadyApplied = () => {
        // comment author may not exist if no one has applied for that job. If not, commentAuthor is set to 'no comment'
        // const commentAuthor = data.state.comments.commentAuthor && data.state.comments.commentAuthor
        if (typeof data.state.comments.commentAuthor == undefined) {console.log('NO COMMENT AUTHOR')}
        // console.log('COMMENT AUTHOR', commentAuthor)
    }

    // checkAlreadyApplied();

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
                {userRole === '2' && <Link to='/LandingPage' onClick={makeComment}><button id='applyBtn'>Apply for Job</button></Link>}
            </div>
        </>
    )
}

export default SingleJobCard;
