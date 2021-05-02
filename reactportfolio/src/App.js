import React, { Component } from 'react';
import './App.css';
import About from 'components/index'
import Contact from 'components/contact'
import Portfolio from 'components/portfolio2'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
		<div id="colorlib-main">
			<About></About>
			<Contact></Contact>
			<Portfolio></Portfolio>
          	</div>
      	</div>
      </div>
    );
  }
}
export default App;