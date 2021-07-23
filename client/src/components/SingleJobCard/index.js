import React from 'react'

const SingleJobCard = () => {

    //TO DO: PASS IN INDIVIDUAL JOB INFORMATION FROM DB QUERY AS PROPS

    return (
        <>
            <div id='singleJobCard'>
                <div className='singleJobInfo'>
                    <p>Job Title:</p>
                    <p>Job # 1</p>
                </div>
                <div className='singleJobInfo'>
                    <p>Job Description:</p>
                    <p> pluribus unum (/iː ˈplɜːrɪbəs ˈuːnəm/ ee PLUR-ib-əs OO-nəm, Classical Latin: [eː ˈpluːrɪbʊs ˈuːnʊ̃]) – Latin for "Out of many, one"[1][2] (also translated as "One out of many"[3] or 
                        "One from many"[4]) – is a traditional motto of the United States, appearing on the Great Seal along with Annuit cœptis (Latin for "he approves the undertaking [lit. 'things undertaken']") 
                        and Novus ordo seclorum (Latin for "New order of the ages"); its inclusion on the seal was approved by an Act of Congress in 1782.[2] While its status as national motto was for many
                        years unofficial, E pluribus unum was still considered the de facto motto of the United States from its early history.[5] Eventually, the United States Congress passed an act (H. J. 
                        Resolution 396), adopting "In God We Trust" as the official motto in 1956.[6]</p>
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
