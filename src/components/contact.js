import React from 'react';
import 'react-bootstrap';
function Contact() {
      return (
        <div className="contact">
        <div className="container">
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <img 
                   className="img-fluid rounded mb-4 mb-lg-0"
                   src="public/assets/images/postcard.jpeg" width = '500px' height = '500px'
                   alt="contact"
                />
              </div>
              <div className="col-lg-5">
              <h1 className="font-weight-light align-items-center">Contact</h1>
              <p> Drop me an email!</p><a href="mailto: aks.auburn@gmail.com"> aks.auburn@gmail.com</a></div> 
                  </div>
        </div>
      </div>
      );
    }

  export default Contact;