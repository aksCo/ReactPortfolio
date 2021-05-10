import React from 'react';
import 'react-bootstrap';
// function About() {
//       return (
//         <div>
//           <meta charSet="UTF-8" />
//           <title>Index Page</title>
          {/*About Me Section*/}
    //       <div className="container">
    //         <br />
    //         <div className="row">
    //           <div className="col-md-8">
    //             <div className="page-header">
    //               <h1> About Me </h1>
    //             </div>
    //             <div className="row">
    //               <div className="col-md-3">
    //                 <img src="assets/images/image.png" href="assets/images/image.png" alt="Aks Picture" className="img-thumbnail" />
    //               </div>
    //               <div className="about col-md-9">
    //                 <p> Hello! I'm Aks Sreenivasan. I'm from Singapore.<br />
    //                   <br /> I have an Industrial and Systems Engineering degree from Auburn University, Auburn, AL and a Green Belt in Lean Six Sigma from IASSC. <br />
    //                   <br />
    //                   My past and current work experience includes work as a Business Analyst and Consultant for lean-six sigma based process improvement projects as well as digital transformation projects in banking and finance in both Singapore as well as Sydney,Australia.<br />
    //                   <br />
    //                   My programming skills include proficiency in Vanilla Javascript, Node, React, Express, Handlebars, Mongo, Matlab and SQL. I'm also very comfortable with Github and Heroku. Programming is a journey, so one of my goals is to constantly grow by revisiting
    //                   my old projects and adding new functionalities.<br />
    //                   <br />
    //                   When I'm not working, I love to read, swim, listen to records and catch up with friends.</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div></div></div>
    //   );
    // }
    function About() {
      return (
        <div className="about">
          <div className="container">
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  className="img-thumbnail"
                  src="assets/images/akspicture.png" width = '500px'height = '500px'
                  href="assets/images/akspicture.png"
                  alt="Aks Picture"
                />
              </div>
              <div className="col-lg-5">
                <h1 className="font-weight-light">About</h1>
                <p>
                Hello! I'm Aks Sreenivasan. I'm from Singapore.
                I have an Industrial and Systems Engineering degree from Auburn University, Auburn, AL and a Green Belt in Lean Six Sigma from IASSC.
                My past and current work experience includes work as a Business Analyst and Consultant for lean-six sigma based process improvement projects as well as digital transformation projects in banking and finance in both Singapore as well as Sydney,Australia.
                My programming skills include proficiency in Vanilla Javascript, Node, React, Express, Handlebars, Mongo, Matlab and SQL. I'm also very comfortable with Github and Heroku. 
                Programming is a journey, so one of my goals is to constantly grow by revisiting
                my old projects and adding new functionalities.
                When I'm not working, I love to read, swim, listen to records and catch up with friends.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
  export default About;