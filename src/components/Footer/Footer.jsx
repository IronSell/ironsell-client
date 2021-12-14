import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css';

function Footer() {
  
  return (
    <div className='footer'>

      <div className='columsFooter'>
        <p>Rocio Garcia:</p>
        
        <Link className="btn btn-primary" style="background-color: #0082ca;" href="#!" role="button">
            <i className="fab fa-linkedin-in"> </i></Link>
            <Link className="btn btn-primary" style="background-color: #333333;" href="#!" role="button">
                <i className="fab fa-github"></i></Link>
      </div>

        <div className='columsFooter'>
            <p>Nacho Benito:</p>
            <Link className="btn btn-primary" style="background-color: #0082ca;" href="#!" role="button">
            <i className="fab fa-linkedin-in"> cc</i></Link>
            <Link className="btn btn-primary" style="background-color: #333333;" href="#!" role="button">
                <i className="fab fa-github"></i></Link>
        </div>

            <div className='columsFooter'>
            <p>federico Altava Redondo:</p>
            <Link className="btn btn-primary" style="background-color: #0082ca;" href="#!" role="button">
            <i className="fab fa-linkedin-in"> </i></Link>
            <Link className="btn btn-primary" style="background-color: #333333;" href="#!" role="button">
                <i className="fab fa-github"></i></Link>
                
            </div>
    </div>
  );
}

export default Footer;