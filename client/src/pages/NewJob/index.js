import React, {useState} from 'react'

import './styles.css';

const NewJob = () => {

    const userId = localStorage.getItem('userId')

    const [ jobInfo, setJobInfo ] = useState({ 
        jobText: '', 
        jobAuthor: userId,
        location: '',
        duration: '',
        otherComments: '', 
    });

    //update state based on form input changes
    const handleChange = (event) => {
        const {name, value} = event.target;

        // spreads apart userInfo and sets name: value into it
        setJobInfo({
            ...jobInfo,
            [name]: value,
        });
        console.log(jobInfo)
    };

    //NEED TO GET INFO ABOUT CONTRACTOR AND PASS INTO NEW JOB CARD

    return (
        <section id="newJob">
            <h1 id='contractorTitle'>Create new job</h1>
            <form id="newJobForm">
                <label>Job Description:</label>
                <textarea
                    placeholder="Write a short description about your job"
                    name="jobText"
                    value={jobInfo.jobText}
                    onChange={handleChange}
                    type="text" 
                    required 
                />
                <label>Job Location:</label>
                <input
                    placeholder="Address or Location of job" 
                    name="location"
                    value={jobInfo.location}
                    onChange={handleChange}
                    type="text"
                    required
                />
                <label>Duration:</label>
                <input 
                    placeholder="Date or time of job"
                    name="duration"
                    value={jobInfo.duration}
                    onChange={handleChange}
                    type="text"
                    required
                />
                <label>Other Comments:</label>
                <textarea
                    placeholder="Any other information you want to add"
                    name="otherComments"
                    value={jobInfo.otherComments}
                    onChange={handleChange}
                    type="text"    
                />
                <button type="submit" form="nameform" value="Submit">Submit</button>
            </form>
        </section>
    )
}

export default NewJob;
