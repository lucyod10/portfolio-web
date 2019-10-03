import React from 'react';
import '../css/contact.css';
import email from '../images/icon/email_blue.png';
import linkedin from '../images/icon/linkedin_blue.png';
import github from '../images/icon/github_01_blue.png';

function Contact() {
  return (
    <div className="thinContainer">
        <h2>Contact</h2>
        <ul>
          <li><img src={ email } /> lucyod10@gmail.com</li>
          <li><a href="https://www.linkedin.com/in/lucyogdendoyle/"><img src={ linkedin } />linkedin.com/in/lucyogdendoyle</a></li>
          <li><a href="https://github.com/lucyod10"><img src={ github } />github.com/lucyod10</a></li>
        </ul>
    </div>
  );
}

export default Contact;
