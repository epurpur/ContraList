import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* CSS styles */
import './App.css';

/* Components */
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      hello world
    </div>
  );
}

export default App;
