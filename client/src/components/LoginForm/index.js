import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// Queries and Mutations
import { LOGIN_USER } from '../../utils/mutations';

import { UserContext } from '../../utils/UserContext';

import Auth from '../../utils/auth';

const LoginForm = () => {

    const { userRole, setUserRole } = useContext(UserContext);
    const [ formState, setFormState ] = useState({ email: '', password: '' });
    const [ login, { error, data } ] = useMutation(LOGIN_USER);  

    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
      
      setFormState({
        ...formState,
        [name]: value,
      });

      console.log(formState);
    };

    // submit form
    const handleFormSubmit = async (event) => {

      // logs current value of formState
      console.log('formState upon start of handleFormSubmit ::', formState);

      // takes data and executes login mutation
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

      //get roleId value of user from localstorage
      const roleId = localStorage.getItem('roleId');

      //setUserRole context to value of roleId
      setUserRole(roleId);
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
