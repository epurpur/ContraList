import React from 'react'
import { Link } from 'react-router-dom';

//styles are in /LndingPage/styles.css
import '../../pages/LandingPage/styles.css';


const JobCard = ({ createdAt, jobText, jobAuthor }) => {

            {/* Link to= WILL LINK TO SINGLE JOB PAGE (ex: /SingleJobPage/:id */}
    return (
            <Link to='/SingleJobPage' className='jobCard' style={{ textDecoration: 'none' }}>
                <p> {jobText} </p>
                <p>Date: {createdAt}</p>
            </Link>
    )
}

export default JobCard;

