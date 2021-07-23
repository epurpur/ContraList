import React from 'react'

const SingleJob = ( {userType} ) => {
    return (
        <div>
            {userType === 'contractor' ? <>Single Job Page Contractor</> : <>Single Job Page Worker</>}
        </div>
    )
}

export default SingleJob;
