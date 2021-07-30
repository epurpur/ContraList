import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import decode from 'jwt-decode';

// Queries and Mutations
import { QUERY_USER } from '../../utils/queries';
import { LOGIN_USER } from '../../utils/mutations';

import { UserContext } from '../../utils/UserContext';

import Auth from '../../utils/auth';

const LoginForm = () => {

    const { userRole, setUserRole } = useContext(UserContext);
    const [ formState, setFormState ] = useState({ email: '', password: '' });
    const [username, setUserName] = useState('');
    const [ login, { error, data } ] = useMutation(LOGIN_USER);  
    const {loading, err, queryData } = useQuery(QUERY_USER, {variables: {username: username }});

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

      // logs current value of formState
      console.log('formState upon start of handleFormSubmit ::', formState);

      //
      try {
        const { data } = await login({
          variables: { ...formState },
          
        });

        // takes login token as well as userId (which is decoded) and stores it in local storage
        Auth.login(data.login.token);

        //get decoded login token value of username and set to username state with setUserName
        const currentUsername = localStorage.getItem('username')
        setUserName(currentUsername);

      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });

      //START HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      // makes query to DB for data about this specific user by the username
      // if currentUserData exists, then give current data about user
      // I am trying to follow class video MERN class 2 at minute 41
      //HERE WE NEED TO USE QUERY USER TO GET INFO ABOUT THIS USER AND USE ROLE_ID TO SET VALUE OF USERROLE CONTEXT TO '1' OR '2'
      

      
    };
  
    const logoutUser = (event) => {
    // logs user out. destroys login token and userId in local storage
        event.preventDefault();
        Auth.logout();
    }

    //upon page load, log if user is logged in or not
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
                <Link to='/LandingPage' onClick={handleFormSubmit}>
                  <button>Submit</button>
                </Link>

            </form>

            <button type="submit" onClick={logoutUser}>Logout</button>
        </section> 
    )
}

export default LoginForm;
