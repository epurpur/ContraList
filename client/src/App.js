import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* CSS styles */
import './App.css';

/* Pages */
import Homepage from './pages/Homepage';
import ContractorLogin from './pages/ContractorLogin';
import EmployeeLogin from './pages/EmployeeLogin';
import ContractorRegistration from './pages/ContractorRegistration';
import EmployeeRegistration from './pages/EmployeeRegistration';

/* Components */
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        {/* Establishing routes to all endpoints */}
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/ContractorLogin">
            <ContractorLogin />
          </Route>
          <Route exact path="/EmployeeLogin">
            <EmployeeLogin />
          </Route>
          <Route exact path="/ContractorRegistration">
            <ContractorRegistration />
          </Route>
          <Route exact path="/EmployeeRegistration">
            <EmployeeRegistration />
          </Route>
        </Switch>
        
      </div>
    </Router>

  );
}

export default App;
