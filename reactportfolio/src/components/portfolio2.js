import React from 'react';
import 'react-bootstrap';


function Portfolio() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <title>Portfolio Page</title>
          {/* Bootstrap CSS */}
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
          <link rel="stylesheet" href="assets/css/style.css" /> 
          <h2>PORTFOLIO</h2>
          {/*<div id="myBtnContainer">
            <button className="btn active" onClick={()=>filterSelection('all')}> Show all</button>
            <button className="btn" onClick="()=>filterSelection('General Links')">General Links</button>
            <button className="btn" onClick="()=>filterSelection('Projects')">Projects</button>
            {/* <button className="btn" onclick="filterSelection('GitHub')"> GitHub</button> */}
          {/* /* </div>}*/}

          {/* Portfolio Gallery Grid */}
          <div className="row">
            <div className="column General Links">
              <div className="content">
                <h4>Links to Check Out: </h4>
                <div id="link" className="link"><a href="assets/wordfile/CV_5.0.pdf" target="_blank"> CV </a></div>
                <br />
                <div id="link" className="link"><a href="https://www.linkedin.com/in/aks-sreenivasan/" target="_blank">LinkedIn</a></div>
                <br />
                <div id="link" className="link"><a href="https://github.com/aksCo" target="_blank">GitHub</a></div>
              </div>
            </div>
            <div className="column Projects">
              <div className="content">
                <h4>Cocktails and Cuisines</h4>
                <img src="assets/images/CC pic.png" alt="Screenshot of Cocktails and Cuisine Application" style={{width: '70%'}} />
                <p> <br />Search for different recipes by name. Features HTML, CSS, Accordians, JavaScript including jQuery, Foundation framework, and APIs from MealDB and DrinksDB</p>
                <div id="link" className="link"><a href="https://luuluu75.github.io//Cocktails-Cuisines/" target="_blank">Cocktails and Cuisines</a></div>
              </div>
            </div>
            <div className="column Projects">
              <div className="content">
                <h4>Password Generator</h4>
                <img src="assets/images/PasswordGen.png" alt="Screenshot of Password Generator" style={{width: '70%'}} />
                <p><br /> Generate a random password. Features HTML, CSS, JavaScript including jQuery, moment.js</p>
                <br /><br />
                <div id="link" className="link"><a href="https://aksco.github.io/passwordgenerator/" target="_blank">Random Password Generator</a></div>
              </div>
            </div>
            <div className="column Projects">
              <div className="content">
                <h4>Coding Quiz</h4>
                <img src="assets/images/codingquiz.png" alt="Screenshot of Coding Quiz Generator" style={{width: '70%'}} />
                <p><br /> Generate a timed quiz on JavaScript fundamentals and stores high scores. Features HTML, CSS, JavaScript including jQuery, moment.js</p>
                <br />
                <div id="link" className="link"> <a href="https://aksco.github.io/codingquizcreator/" target="_blank">Coding Quiz Generator</a></div>
              </div>
            </div>
            <div className="column Projects">
              <div className="content">
                <h4>Workday Scheduler</h4>
                <img src="assets/images/workday.png" alt="Screenshot of Workday Scheduler" style={{width: '70%'}} />
                <p><br />Schedule tasks for standard business hours. Features HTML, CSS and JavaScript including moment.js</p>
                <br />
                <div id="link" className="link"><a href="https://aksco.github.io/workdayscheduler/" target="_blank">Workday Scheduler</a></div>
              </div>
            </div>
            <div className="column Projects">
              <div className="content">
                <h4>Weather Dashboard</h4>
                <img src="assets/images/weather.png" alt="Screenshot of Weather Dashboard" style={{width: '70%'}} />
                <p><br />Schedule tasks for standard business hours. Features HTML, CSS, JavaScript including moment.js and APIs from OpenWeather</p>
                <br />
                <div id="link" className="link"><a href="https://aksco.github.io/weather-dashboard/" target="_blank">Weather Dashboard</a></div>
              </div>
            </div>
            <div className="column Projects">
              <div className="content">
                <h4>Fitness Tracker</h4>
                <img src="assets/images/fitness.png" alt="Screenshot of Fitness Tracker" style={{width: '70%'}} />
                <p><br />Fitness Tracker built with starter code provided by Trinity Educational Services. Features JavaScript including Node js, mySql and the use of html and api routes</p>
                <br />
                <div id="link" className="link"><a href="https://shielded-caverns-44461.herokuapp.com/?id=606d3b0921821100153b933a" target="_blank">Fitness Tracker</a></div>
              </div>
            </div>
            {/* END GRID */}
          </div>
        </div>
      );
      }
/* const Projects = [{
        img: 'assets/images/CC pic.png',
        alt: 'Screenshot of Cocktails and Cuisine Application',
        title: 'Cocktails and Cuisines',
        Description: 'Search for different recipes by name. Features HTML, CSS, Accordians, JavaScript including jQuery, Foundation framework, and APIs from MealDB and DrinksDB',
        link: "https://luuluu75.github.io//Cocktails-Cuisines/",
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82',
        title: 'Sabiha Plummer',
        featured: true,
    },
]; */


export default Portfolio;