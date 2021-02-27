import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import ScrollIndicator from './components/layout/ScrollIndicator'

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <ScrollIndicator />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
