import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* CSS styles */
import './App.css';

/* Pages */
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';

/* Components */
import Header from './components/Header';

function App() {

  // defining empty user type. Will be set to 'contractor' or 'worker' depending on what user chooses
  const [userType, setUserType] = useState('');

  return (
    <Router>
      <div className="App">
        <Header userType={userType} setUserType={setUserType}/>
        
        {/* Establishing routes to all endpoints */}
        <Switch>
          <Route exact path="/">
            <Homepage userType={userType} setUserType={setUserType} />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>          
          <Route exact path="/Register">
            <Register />
          </Route>         
        </Switch>
        
      </div>
    </Router>

  );
}

export default App;
