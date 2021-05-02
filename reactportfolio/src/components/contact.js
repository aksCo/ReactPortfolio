import React from 'react';
import 'react-bootstrap';
function Contact() {
      return (
        <div>
          {/*Contact Page*/}
          <meta charSet="UTF-8" />
          <title>Contact Page</title>
          {/* Bootstrap CSS */}
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
          {/*Contact Form*/}
          <form id="contact-form" method="post" action="contact.php" role="form">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <br/>
                  <h1>Contact Me</h1>
                  <a href="mailto: aks.auburn@gmail.com"> Email: aks.auburn@gmail.com</a>
                  <br/>
                  <span itemProp="telephone"><a href="tel:+61401542615">Tel: 0401542615</a></span>
                </div>
              </div>
              </div>
              </form>
              <br/>
              </div>
      );
    }

  export default Contact;