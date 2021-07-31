import { useMutation } from '@apollo/client';
import React, {useState} from 'react'

import { ADD_USER } from '../../utils/mutations';

const ContractorRegistrationForm = () => {

    /**
     * Steps needed:
     * Xget user input values from form 
     * -useMutation of ADD_USER to create new user
     * -when new user created, log user in and redirect to landing page
     */

    // get user input values from form. Start by setting values in state
    const [ userInfo, setUserInfo ] = useState({
        username: '',
        password: '',
        email: '',
        phoneNumber: '',
        licenseNumber: '',
        roleId: '1',
        description: ''
    });

    // invoke useMutation hook to allow adding new user
    const [addUser, {error}] = useMutation(ADD_USER);

    //update state based on form input changes
    const handleChange = (event) => {
        const {name, value} = event.target;

        // spreads apart userInfo and sets name: value into it
        setUserInfo({
            ...userInfo,
            [name]: value,
        });

    };


    //submit user input to create new user in DB, then log in user
    const handleFormSubmit = async (event) => {
        //logs current value of userInfo
        console.log('User Info upon submission: ', userInfo);

        // takes data and executes addUser mutation
        try {
            const { data } = await addUser({
                variables: {...userInfo}
            });
        } catch (e) {
            console.error(e);
        };


        // clear form values
        setUserInfo({
            username: '',
            password: '',
            email: '',
            phoneNumber: '',
            licenseNumber: '',
            roleId: '1',
            description: ''
        })
    }


    return (
        <section className="registrationForm">
            <h1 className="formTitle">Register as a licensed contractor</h1>
            <form>
                <label>Username:</label>
                <input 
                    placeholder="username" 
                    name="username" 
                    value={userInfo.username} 
                    onChange={handleChange} 
                    type="text"
                    required 
                />
                <label required>Password:</label>
                <input 
                    placeholder="password"
                    name="password"
                    value={userInfo.password}
                    onChange={handleChange}
                    type="password"
                    required
                />
                <label required>Email:</label>
                <input 
                    placeholder="youremail@email.com"
                    name="email"
                    value={userInfo.email} 
                    onChange={handleChange}
                    type="email"
                    required
                />
                <label>Phone:</label>
                <input 
                    placeholder="123-456-7890" 
                    name="phoneNumber"
                    value={userInfo.phoneNumber}
                    onChange={handleChange}
                    type="tel"
                    required
                />
                <label>Contractor License Number:</label>
                <input 
                    placeholder="Valid contractor license #"
                    name="licenseNumber"
                    value={userInfo.licenseNumber}
                    onChange={handleChange}
                    type="text"
                    required
                />
                <label required>Description:</label>
                <textarea 
                    placeholder="Briefly describe yourself" 
                    name="description"
                    value={userInfo.description}
                    onChange={handleChange}
                    type="text"
                    required
                />
                <button type="submit" onClick={() => console.log('placeholder')}>Submit</button>
            </form>
        </section> 
    )
}

export default ContractorRegistrationForm;
