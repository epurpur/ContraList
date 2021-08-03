import React from 'react'


const WorkerCard = ( {username, email, phoneNumber, description} ) => {
    return (
        <div>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phoneNumber}</p>
            <p>{description}</p>
        </div>
    )
}

export default WorkerCard;
