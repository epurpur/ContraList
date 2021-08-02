import React from 'react'
import { Link } from 'react-router-dom';

const ActiveJobsCard = ({ id, createdAt, jobText, jobAuthor }) => {

    {/* Link to= WILL LINK TO SINGLE JOB PAGE (ex: /SingleJobPage/:id */}
    return (
            <Link to={{pathname: `/SingleJobPage/${id}`, 
                        state: { id:id, createdAt:createdAt, jobText:jobText, jobAuthor:jobAuthor}}} 
                        className='jobCard' 
                        style={{ textDecoration: 'none' }}>
                <p> {jobText} </p>
                <p> Date: {createdAt} </p>
            </Link>
    )
}

export default ActiveJobsCard;

