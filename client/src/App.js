import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

/* CSS styles */
import './App.css';

/* Pages */
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import NewJob from './pages/NewJob';
import SingleJobPage from './pages/SingleJobPage';

/* Components */
import Header from './components/Header';

/* User Context Provider */
import UserProvider from './utils/UserContext';

/* Apollo Setup */
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {

  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Router>
          <div className="App">
            <Header />
            
            {/* Establishing routes to all endpoints */}
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/Login" >
                <Login />
              </Route>          
              <Route exact path="/Register" >
                <Register />
              </Route>
              <Route exact path="/LandingPage" >
                <LandingPage />
              </Route> 
              <Route exact path="/NewJob" >
                <NewJob />
              </Route>    

              {/* This URL will eventually be changed to /SingleJobPage/:id */} 
              <Route exact path="/SingleJobPage" >
                <SingleJobPage />
              </Route>    
            </Switch>
      
          </div>
        </Router>
      </UserProvider>
    </ApolloProvider>

  );
}

export default App;
