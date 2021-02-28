import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollIndicator from './components/layout/ScrollIndicator'
import WhatsAppButton from './components/layout/WhatsAppButton'

import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import AboutUs from './components/pages/AboutUs'
import News from './components/pages/News'

const App = () => {
  return (
    <Router>
      <>
        <WhatsAppButton />
        <Navbar />
        <ScrollIndicator />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/portafolio' component={Portfolio} />
          <Route exact path='/nosotros' component={AboutUs} />
          <Route exact path='/noticias' component={News} />
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
