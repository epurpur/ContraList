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

/* Apollo Setup */
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {

  // defining empty user type. Will be set to 'contractor' or 'worker' depending on what user chooses
  const [userType, setUserType] = useState('');

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header userType={userType} setUserType={setUserType}/>
          
          {/* Establishing routes to all endpoints */}
          <Switch>
            <Route exact path="/">
              <Homepage userType={userType} setUserType={setUserType} />
            </Route>
            <Route exact path="/Login" >
              <Login userType={userType} setUserType={setUserType} />
            </Route>          
            <Route exact path="/Register" >
              <Register userType={userType} />
            </Route>
            <Route exact path="/LandingPage" >
              <LandingPage userType={userType} setUserType={setUserType} />
            </Route> 
            <Route exact path="/NewJob" >
              <NewJob />
            </Route>    

            {/* This URL will eventually be changed to /SingleJobPage/:id */} 
            <Route exact path="/SingleJobPage" >
              <SingleJobPage userType={userType} />
            </Route>    
          </Switch>
    
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
