import React, {useState} from 'react'

import './styles.css';

const NewJob = () => {

    //NEED TO GET INFO ABOUT CONTRACTOR AND PASS INTO NEW JOB CARD

    return (
        <section id="newJob">
            <h1 id='contractorTitle'>Create new job</h1>
            <form id="newJobForm">
                <label for="title" required>Job Title:</label>
                <input type="text" />
                <label for="description" required>Job Description:</label>
                <input type="text"/>
                <label for="location" required>Job Location:</label>
                <input type="text"/>
                <label for="duration">Duration:</label>
                <input type="text"/>
                <label for="comments">Other Comments:</label>
                <textarea></textarea>
                <button type="submit" form="nameform" value="Submit">Submit</button>
            </form>

        </section>
    )
}

export default NewJob;
