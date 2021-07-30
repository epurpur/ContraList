import React, { useState, useContext } from 'react';
import decode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import { UserContext } from '../../utils/UserContext';

import Auth from '../../utils/auth';

const LoginForm = () => {

    const { userRole, setUserRole } = useContext(UserContext);

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
      
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {

      console.log(formState);

      //
      try {
        const { data } = await login({
          variables: { ...formState },
          
        });

        
        // takes login token as well as userId (which is decoded) and stores it in local storage
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };
  
    const logoutUser = (event) => {
    // logs user out. destroys login token in local storage
        event.preventDefault();
        Auth.logout();
    }

    console.log("Logged In?", Auth.loggedIn())


    return (
        <section className="loginForm">
            <h1 className="formTitle">Login</h1>
            <form>
                <label>Email:</label>
                <input 
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                />
                <label>Password:</label>
                <input 
                    type="password"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                />
                <Link to='/LandingPage' onClick={handleFormSubmit}>Submit</Link>
                {/* <button 
                    type="submit" 
                    form="nameform" 
                    onClick={handleFormSubmit}
                >
                    Submit
                </button> */}
            </form>

            <button type="submit" onClick={logoutUser}>Logout</button>
        </section> 
    )
}

export default LoginForm;
