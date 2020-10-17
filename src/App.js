import React from 'react'
import GlobalStyles from './components/globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';

function App() {
  return(
    <Router>
      <GlobalStyles />
      <Navbar />
    </Router>
  )
}

export default App
