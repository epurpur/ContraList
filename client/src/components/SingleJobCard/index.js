import React from 'react';
import {useLocation} from "react-router-dom";

const SingleJobCard = () => {

    // data passed in as state from ActiveJobsCard
    let data = useLocation();
    console.log(data.state);

    return (
        <>
            <div id='singleJobCard'>
                <div className='singleJobInfo'>
                    <p>Job ID:</p>
                    <p> {data.state.id} </p>
                </div>
                <div className='singleJobInfo'>
                    <p>Job Description:</p>
                    <p> {data.state.jobText} </p>
                </div>
                <div className='singleJobInfo'>
                    <p>Location:</p>
                    <p>Short Pump, VA</p>
                </div>
                <div className='singleJobInfo'>
                    <p>Duration:</p>
                    <p>2 Weeks July 21 through August 6</p>
                </div>
                <div className='singleJobInfo'>
                    <p>Other Comments:</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </>
    )
}

export default SingleJobCard;
