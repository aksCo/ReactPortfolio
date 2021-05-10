import React, {Component} from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from 'components/header'
import About from 'components/index'
import Contact from 'components/contact'
import Portfolio from 'components/portfolio2'
import Footer from 'components/footer'
/* class App extends React.Component {
    render() {
        return ( <div>
            <Header/>
            <div id = "About">
            <About/>
            <div>
            </div> <div>
            <Contact/>
            </div> <div>
            <Portfolio/>
            </div> 
            </div> 
            <Footer/>
            </div>
        );
    }
} */
function App() 
{
    return (
      <div className="App">
        <Router>
          <div> <Header/></div>
          <Switch>
            <Route path="/index" exact component={() => <About/>}/>
            <Route path="/contact" exact component={() => <Contact/>}/>
            <Route path="/portfolio2" exact component={() => <Portfolio/>}/>
          </Switch>
          <div><Footer/></div>
        </Router>
      </div>
    );
  }

export default App;