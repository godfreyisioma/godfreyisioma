import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Insight from './pages/Insight'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/about' exact component={About}></Route>
        <Route path='/work' exact component={Work}></Route>
        <Route path='/insight' exact component={Insight}></Route>
        <Route path='/contact' exact component={Contact}></Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
